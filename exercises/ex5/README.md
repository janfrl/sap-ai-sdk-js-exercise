# Exercise 5 - Orchestration Chatbot

This task combines templating, content filtering and data masking to create a safer chatbot configuration.

### 1. Navigate to the Task

Open [`server/tasks/config/ex5.ts`](../../server/tasks/config/ex5.ts).

### 2. Add Implementation

Add the following code to the task:

```typescript
const model_name = payload.model as string & ChatModel
const result = new OrchestrationClient({
  llm: { model_name, model_params: { max_tokens: 1000, temperature: 0.2 } },
  templating: {
    template: [
      { role: 'system', content: 'You are a helpful chatbot assistant.' },
      { role: 'user', content: '{{?user_query}}' },
    ],
  },
  filtering: {
    input: { filters: [buildAzureContentSafetyFilter()] },
    output: { filters: [buildAzureContentSafetyFilter()] },
  },
  masking: {
    masking_providers: [
      buildDpiMaskingProvider({
        method: 'anonymization',
        entities: ['profile-person', 'profile-org'],
      }),
    ],
  },
})
return { result }
```

The existing chat page already stores the conversation history. Use this configuration to stream responses while applying the filters and masking provider.

### 3. Run and Verify

Start a chat using this task. You can send multiple messages and observe that unsafe content is blocked and personal data is masked.

Further reading: [Chat Completion](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion).

## Practical Example

A customer service portal might integrate this chatbot configuration to mask any personal references from support messages and filter offensive language before forwarding the conversation to an external AI provider.
