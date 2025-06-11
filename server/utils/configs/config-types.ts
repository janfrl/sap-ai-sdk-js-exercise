import type { OrchestrationClient } from '@sap-ai-sdk/orchestration'

export interface ExerciseConfig {
  id: string
  label: string
  createClient: (model: string) => OrchestrationClient
}
