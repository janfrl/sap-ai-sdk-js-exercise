# Exercise 4 - Data Masking

This exercise demonstrates how to mask personal data before passing it to the LLM.

### 1. Navigate to the Task

Open [`server/tasks/config/ex4.ts`](../../server/tasks/config/ex4.ts).

### 2. Add Implementation

Ensure the task contains the following code:

```typescript
const model_name = payload.model as string & ChatModel
const result = new OrchestrationClient({
  llm: { model_name, model_params: { max_tokens: 1000 } },
  templating: {
    template: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Please repeat the following input: {{?pii}}' },
    ],
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

Pass a `pii` input parameter when calling `chatCompletion`.

### 3. Run and Verify

Save the file and test the task from the chat page. The model should receive a masked version of the provided personal data.

Learn more about masking options in the [documentation](https://sap.github.io/ai-sdk/docs/js/orchestration/chat-completion#data-masking).

## Practical Example

A human resources team could use this task to remove employee names and phone numbers from onboarding questions before sending them to an LLM. This ensures no personal data leaves the company's boundaries.
