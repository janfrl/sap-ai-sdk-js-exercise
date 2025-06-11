import type { OrchestrationClient } from '@sap-ai-sdk/orchestration'
import type { ChatMessage } from '@sap-ai-sdk/orchestration/dist/client/api/schema/chat-message'
import { readBody } from 'h3'
import { z } from 'zod/v4'

defineRouteMeta({
  openAPI: {
    description: 'Chat with AI.',
    tags: ['ai'],
  },
})

export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)

  const { id } = getRouterParams(event)
  const schema = z.object({
    model: z.string(),
    config: z.string().optional(),
    inputParams: z.record(z.string(), z.string()).optional(),
    messages: z.array(
      z.object({
        role: z.string(),
        content: z.string(),
      }),
    ),
  })
  const { model, messages, config, inputParams } = schema.parse(await readBody(event)) as {
    model: string
    config?: string
    inputParams?: Record<string, string>
    messages: { role: string, content: string }[]
  }

  const db = useDrizzle()
  const taskName = config && config.length > 0 ? config : 'config:default'
  const { result: client } = await runTask(taskName, { payload: { model } }) as { result: OrchestrationClient }

  const chat = await db.query.chats.findFirst({
    where: (chat, { eq }) => and(eq(chat.id, id as string), eq(chat.userId, session.user?.id || session.id)),
    with: {
      messages: true,
    },
  })
  if (!chat) {
    throw createError({ statusCode: 404, statusMessage: 'Chat not found' })
  }

  if (!chat.title) {
    const titleResponse = await client.chatCompletion({
      messages: [
        {
          role: 'system',
          content: `You are a title generator for a chat:
        - Generate a short title based on the first user's message
        - The title should be less than 30 characters long
        - The title should be a summary of the user's message
        - Do not use quotes (' or ") or colons (:) or any other punctuation
        - Do not use markdown, just plain text`,
        },
        {
          role: 'user',
          content: chat.messages[0]!.content,
        },
      ],
    })
    const title = titleResponse.getContent()?.replace(/:/g, '').split('\n')[0] || ''
    setHeader(event, 'X-Chat-Title', title)
    await db.update(tables.chats).set({ title }).where(eq(tables.chats.id, id as string))
  }

  const lastMessage = messages[messages.length - 1]
  if (lastMessage && lastMessage.role === 'user' && messages.length > 1) {
    await db.insert(tables.messages).values({
      chatId: id as string,
      role: 'user',
      content: lastMessage.content,
    })
  }

  const streamResponse = await client.stream({
    messages: messages as ChatMessage[],
    ...(inputParams ? { inputParams } : {}),
  })
  const contentStream = streamResponse.stream.toContentStream()

  const encoder = new TextEncoder()
  let fullText = ''

  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      for await (const chunk of contentStream) {
        fullText += chunk
        controller.enqueue(encoder.encode(`data: ${chunk}\n\n`))
      }
      controller.enqueue(encoder.encode('data: [DONE]\n\n'))
      controller.close()
      await db.insert(tables.messages).values({
        chatId: chat.id,
        role: 'assistant',
        content: fullText,
      })
    },
    cancel() {
      streamResponse.stream.controller.abort()
    },
  })

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
    },
  })
})
