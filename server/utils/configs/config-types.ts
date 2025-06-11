import type { OrchestrationClient } from '@sap-ai-sdk/orchestration'

export interface ExerciseConfig {
  name: string
  createClient: (model: string) => OrchestrationClient
}
