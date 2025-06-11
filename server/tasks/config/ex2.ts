import { type ChatModel, OrchestrationClient } from '@sap-ai-sdk/orchestration'

export default defineTask({
  meta: {
    name: 'config:ex2',
    description: 'Exercise 2 - Prompt Template',
  },
  run({ payload }) {
    const model_name = payload.model as string & ChatModel
    const result = new OrchestrationClient({
      llm: { model_name, model_params: { max_tokens: 1000, temperature: 0.1 } },
      templating: {
        template: [
          { role: 'system', content: 'Please generate contents with HTML tags.' },
          { role: 'user', content: 'Create a job post for the position: {{?position}}.' },
        ],
      },
    })
    return { result }
  },
})
