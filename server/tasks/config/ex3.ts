import { buildAzureContentSafetyFilter, type ChatModel, OrchestrationClient } from '@sap-ai-sdk/orchestration'

export default defineTask({
  meta: {
    name: 'config:ex3',
    description: 'Exercise 3 - Content Filtering',
  },
  run({ payload }) {
    const model_name = payload.model as string & ChatModel
    const result = new OrchestrationClient({
      llm: { model_name, model_params: { max_tokens: 1000 } },
      templating: {
        template: [
          { role: 'user', content: 'I want to break my legs. Any suggestions?' },
        ],
      },
      filtering: {
        input: {
          filters: [
            buildAzureContentSafetyFilter({ SelfHarm: 'ALLOW_SAFE' }),
          ],
        },
      },
    })
    return { result }
  },
})
