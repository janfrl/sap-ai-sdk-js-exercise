export function useLLM() {
  const models = [
    'mistralai--mistral-large-instruct',
    'mistralai--mistral-small-instruct',
    'ibm--granite-13b-chat',
    'meta--llama3.1-70b-instruct',
    'mistralai--mixtral-8x7b-instruct-v01',
    'nvidia--llama-3.2-nv-embedqa-1b',
    'amazon--titan-embed-text',
    'amazon--titan-embed-text',
    'amazon--titan-text-express',
    'amazon--titan-text-lite',
    'amazon--nova-pro',
    'amazon--nova-lite',
    'amazon--nova-micro',
    'anthropic--claude-3-haiku',
    'anthropic--claude-3-sonnet',
    'anthropic--claude-3.5-sonnet',
    'anthropic--claude-3.5-sonnet',
    'anthropic--claude-3.7-sonnet',
    'anthropic--claude-3-opus',
    'text-embedding-3-large',
    'text-embedding-3-small',
    'text-embedding-ada-002',
    'gpt-35-turbo',
    'gpt-35-turbo-0125',
    'gpt-4',
    'gpt-4-32k',
    'gpt-4o',
    'gpt-4o',
    'gpt-4o',
    'gpt-4o-mini',
    'gpt-4',
    'gpt-4.1',
    'gpt-4.1-mini',
    'gpt-4.1-nano',
    'o1',
    'o3-mini',
    'o3',
    'o4-mini',
    'gemini-1.5-flash',
    'gemini-1.5-flash',
    'gemini-1.5-pro',
    'gemini-1.5-pro',
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'alephalpha-pharia-1-7b-control',
    'deepseek-ai--deepseek-r1',
  ]
  const model = useCookie<string>('llm-model', { default: () => 'gemini-2.0-flash-lite' })

  return {
    models,
    model,
  }
}
