# Exercise 1 - Getting LLM Access via Orchestration Service

In this exercise you will configure a basic client that sends a single prompt to the orchestration service.

### 1. Navigate to the Task

Open [`server/tasks/config/ex1.ts`](../../server/tasks/config/ex1.ts).

### 2. Add Implementation

Insert or verify the following code inside the task:

```typescript
const model_name = payload.model as string & ChatModel
const result = new OrchestrationClient({
  llm: { model_name, model_params: { max_tokens: 1000 } },
  templating: {
    template: [
      { role: 'user', content: 'What is SAP TechEd?' },
    ],
  },
})
return { result }
```

This creates an `OrchestrationClient` using the model selected in the UI and prepares a user message.

### 3. Run and Verify

Save the file. Nuxt automatically reloads your changes. Trigger the task through the chat page and confirm that the LLM returns a response.

Learn more about orchestrating LLMs in the [documentation](https://sap.github.io/ai-sdk/docs/js/overview-cloud-sdk-for-ai-js).

## Practical Example

A marketing department might set up this minimal configuration to quickly query a foundation model for campaign ideas. Using the orchestration service keeps API keys out of the client application.

Continue to [Exercise 2 - Prompt Templating](../ex2/README.md).
