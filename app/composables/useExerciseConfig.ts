export function useExerciseConfig() {
  const configs = [
    { label: 'Exercise 1 - LLM Access', value: 'ex1' },
    { label: 'Exercise 2 - Prompt Template', value: 'ex2' },
    { label: 'Exercise 3 - Content Filtering', value: 'ex3' },
  ]
  const config = useCookie<string>('exercise-config', { default: () => 'ex1' })

  return {
    configs,
    config,
  }
}
