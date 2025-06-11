import type { ExerciseConfig } from './config-types'

const modules = import.meta.glob<{ default: ExerciseConfig }>('./ex*.ts', { eager: true })

export const configs: ExerciseConfig[] = Object.values(modules).map(m => m.default)

export { type ExerciseConfig } from './config-types'

export function getExerciseConfig(name: string): ExerciseConfig {
  return configs.find(c => c.name === name) || configs[0]!
}
