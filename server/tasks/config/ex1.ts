import { type ChatModel, OrchestrationClient } from '@sap-ai-sdk/orchestration'

export default defineTask({
  meta: {
    name: 'config:ex1',
    description: 'Exercise 1 - LLM Access',
  },
  run({ payload }) {
    const model_name = payload.model as string & ChatModel
    const result = new OrchestrationClient({
      llm: { model_name, model_params: { max_tokens: 1000 } },
      templating: {
        template: [
          { role: 'user', content: 'What is SAP TechEd?' },
        ],
      },
    })
    return { result }
  },
})
