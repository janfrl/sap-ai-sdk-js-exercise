export function useExerciseConfig() {
  const configs = [
    'Exercise 1 - LLM Access',
    'Exercise 2 - Prompt Template',
    'Exercise 3 - Content Filtering',
  ]
  const config = useCookie<string>('exercise-config', { default: () => configs[0] ?? '' })

  return {
    configs,
    config,
  }
}
