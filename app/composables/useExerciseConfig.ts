interface NitroTaskInfo {
  description?: string
}

interface NitroTasksResponse {
  tasks: Record<string, NitroTaskInfo>
}

interface SelectOption {
  value: string
  label: string
}

const EMPTY_OPTION: SelectOption = { value: 'config:default', label: '-' }

export function useExerciseConfig() {
  const { data: raw } = useFetch<NitroTasksResponse>('/_nitro/tasks', {
    default: () => ({ tasks: {} }),
  })

  const configs = computed<SelectOption[]>(() => Object.entries(raw.value.tasks).map(([key, task]) => ({
    value: key,
    label: task.description ?? key,
  })),
  )

  const config = useCookie('exercise-config', {
    default: () => EMPTY_OPTION,
  })

  return {
    configs,
    config,
  }
}
