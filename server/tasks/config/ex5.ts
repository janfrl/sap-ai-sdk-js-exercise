import { buildAzureContentSafetyFilter, buildDpiMaskingProvider, type ChatModel, OrchestrationClient } from '@sap-ai-sdk/orchestration'

export default defineTask({
  meta: {
    name: 'config:ex5',
    description: 'Exercise 5 - Orchestration Chatbot',
  },
  run({ payload }) {
    const model_name = payload.model as string & ChatModel
    const result = new OrchestrationClient({
      llm: { model_name, model_params: { max_tokens: 1000, temperature: 0.2 } },
      templating: {
        template: [
          { role: 'system', content: 'You are a helpful chatbot assistant.' },
          { role: 'user', content: '{{?user_query}}' },
        ],
      },
      filtering: {
        input: { filters: [buildAzureContentSafetyFilter()] },
        output: { filters: [buildAzureContentSafetyFilter()] },
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
