import type { ExerciseConfig } from './config-types'
import { buildAzureContentSafetyFilter, OrchestrationClient } from '@sap-ai-sdk/orchestration'

const config: ExerciseConfig = {
  name: 'Exercise 3 - Content Filtering',
  createClient(model) {
    return new OrchestrationClient({
      llm: { model_name: model, model_params: { max_tokens: 1000 } },
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
  },
}

export default config
