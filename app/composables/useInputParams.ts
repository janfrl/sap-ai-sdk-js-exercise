export function useInputParams() {
  const params = useCookie<Record<string, string>>('input-params', { default: () => ({}) })
  return { params }
}
