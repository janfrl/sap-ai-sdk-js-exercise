# Exercise 2 - Prompt Templating

This exercise extends the client with a system prompt and a template variable.

### 1. Navigate to the Task

Open [`server/tasks/config/ex2.ts`](../../server/tasks/config/ex2.ts).

### 2. Add Implementation

Ensure the task contains the following code:

```typescript
const model_name = payload.model as string & ChatModel
const result = new OrchestrationClient({
  llm: { model_name, model_params: { max_tokens: 1000, temperature: 0.1 } },
  templating: {
    template: [
      { role: 'system', content: 'Please generate contents with HTML tags.' },
      { role: 'user', content: 'Create a job post for the position: {{?position}}.' },
    ],
  },
})
return { result }
```

When calling `chatCompletion`, pass an input parameter `position` to fill the template.

### 3. Run and Verify

Save the file and test the task from the chat page. The LLM should generate a short HTML snippet.

Learn more about prompt templating in the [documentation](https://sap.github.io/ai-sdk/docs/js/overview-cloud-sdk-for-ai-js).

Continue to [Exercise 3 - Content Filtering](../ex3/README.md).
