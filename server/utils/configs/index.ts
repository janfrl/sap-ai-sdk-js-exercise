import ex1 from './ex1'
import ex2 from './ex2'
import ex3 from './ex3'

export { type ExerciseConfig } from './config-types'

export const configs = [ex1, ex2, ex3]

export function getExerciseConfig(id: string) {
  return configs.find(c => c.id === id) || ex1
}
