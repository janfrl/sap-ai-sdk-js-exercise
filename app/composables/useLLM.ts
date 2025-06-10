export function useLLM() {
  const models = [
    'gpt-4o',
    'gpt-4o-mini',
    'anthropic--claude-3.5-sonnet',
    'google--gemini-2.0-flash',
    'google--gemini-2.0-pro',
    'mistral--mixtral-8x7b',
    'meta--llama3.1-70b-instruct',
    'google--gemma-7b-it'
  ]
  const model = useCookie<string>('llm-model', { default: () => 'gpt-4o' })

  return {
    models,
    model
  }
}
