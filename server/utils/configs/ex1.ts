import type { ExerciseConfig } from './config-types'
import { OrchestrationClient } from '@sap-ai-sdk/orchestration'

const config: ExerciseConfig = {
  id: 'ex1',
  label: 'Exercise 1 - LLM Access',
  createClient(model) {
    return new OrchestrationClient({
      llm: { model_name: model, model_params: { max_tokens: 1000 } },
      templating: {
        template: [
          { role: 'user', content: 'What is SAP TechEd?' },
        ],
      },
    })
  },
}

export default config
