export function useExerciseConfig() {
  const { data: configs } = useFetch<string[]>('/api/configs', { default: () => [] })
  const config = useCookie<string>('exercise-config', { default: () => '' })

  watchEffect(() => {
    if (!config.value && configs.value?.length)
      config.value = configs.value[0] || ''
  })

  return {
    configs,
    config,
  }
}
