import { buildDpiMaskingProvider, type ChatModel, OrchestrationClient } from '@sap-ai-sdk/orchestration'

export default defineTask({
  meta: {
    name: 'config:ex4',
    description: 'Exercise 4 - Data Masking',
  },
  run({ payload }) {
    const model_name = payload.model as string & ChatModel
    const result = new OrchestrationClient({
      llm: { model_name, model_params: { max_tokens: 1000 } },
      templating: {
        template: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: 'Please repeat the following input: {{?pii}}' },
        ],
      },
      masking: {
        masking_providers: [
          buildDpiMaskingProvider({
            method: 'anonymization',
            entities: ['profile-person', 'profile-org'],
          }),
        ],
      },
    })
    return { result }
  },
})
