# Exercise 0 - Preparation

This short exercise helps you get the project running and explains how the chat API works.

### 1. Install Dependencies

1. **Install Node.js (LTS):**

   ```bash
   winget install -e --id OpenJS.NodeJS.LTS
   ```

2. **Enable Corepack:**

   ```bash
   corepack enable
   ```

3. **Install `@antfu/ni` globally:**

   ```bash
   npm install -g @antfu/ni
   ```

4. **Install project dependencies:**

   ```bash
   ni
   ```

This installs all Nuxt and SAP AI SDK packages.

### 2. Start the Development Server

Use Nuxt's dev command:

```bash
nr dev
```

The server automatically reloads when files change, so no manual restarts are required.

### 3. Understand `server/api/chats/[id].post.ts`

Open [`server/api/chats/[id].post.ts`](../../server/api/chats/%5Bid%5D.post.ts). The route performs these steps:

1. **Validate the request** using `zod` to ensure `model`, `config` and message list are provided.
2. **Create an `OrchestrationClient`** by calling `runTask` with the selected config. If no config is provided, the route falls back to the `config:default` task, which creates a very simple client. The tasks from later exercises return this client instance.
3. **Load or create the chat** from the database and generate a title on the first message using the LLM.
4. **Persist the user's message** and stream the assistant response back to the browser using Server‑Sent Events.
5. **Store the assistant reply** once streaming is complete.

Having this context will help you understand how the configurations from the following exercises are used when chatting.

## Practical Example

IT administrators can use these setup steps to spin up a secure internal prototype before exposing any AI features to a wider audience.

Continue to [Exercise 1 - Getting LLM Access](../ex1/README.md).
