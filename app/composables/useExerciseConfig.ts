interface NitroTaskInfo {
  description?: string
}

interface NitroTasksResponse {
  tasks: Record<string, NitroTaskInfo>
}

export function useExerciseConfig() {
  const { data: raw } = useFetch<NitroTasksResponse>('/_nitro/tasks', {
    default: () => ({ tasks: {} }),
  })

  const configs = computed(() =>
    Object.entries(raw.value.tasks).map(([key, task]) => ({
      value: key,
      label: task.description ?? key,
    })),
  )

  const selectedValue = useCookie<string>('exercise-config', {
    default: () => '',
  })

  watchEffect(() => {
    if (!selectedValue.value && configs.value.length > 0) {
      selectedValue.value = configs.value[0]?.value ?? '{}'
    }
  })

  const config = computed(() =>
    configs.value.find(c => c.value === selectedValue.value) ?? configs.value[0],
  )

  return {
    configs,
    config,
  }
}
