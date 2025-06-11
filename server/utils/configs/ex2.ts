import type { ExerciseConfig } from './config-types'
import { OrchestrationClient } from '@sap-ai-sdk/orchestration'

const config: ExerciseConfig = {
  name: 'Exercise 2 - Prompt Template',
  createClient(model) {
    return new OrchestrationClient({
      llm: { model_name: model, model_params: { max_tokens: 1000, temperature: 0.1 } },
      templating: {
        template: [
          { role: 'system', content: 'Please generate contents with HTML tags.' },
          { role: 'user', content: 'Create a job post for the position: {{?position}}.' },
        ],
      },
    })
  },
}

export default config
