# Nuxt AI Chatbot Template

[![Nuxt UI Pro](https://img.shields.io/badge/Made%20with-Nuxt%20UI%20Pro-00DC82?logo=nuxt&labelColor=020420)](https://ui.nuxt.com/pro)
[![Deploy to NuxtHub](https://img.shields.io/badge/Deploy%20to-NuxtHub-00DC82?logo=nuxt&labelColor=020420)](https://hub.nuxt.com/new?repo=nuxt-ui-pro/chat)

Full-featured AI Chatbot Nuxt application with authentication, chat history, multiple pages, collapsible sidebar, keyboard shortcuts, light & dark mode, command palette and more. Built using [Nuxt UI Pro](https://ui.nuxt.com/pro) components and powered by the **SAP AI SDK for JavaScript** for a complete chat experience.

- [Live demo](https://chat-template.nuxt.dev/)
- [Documentation](https://ui.nuxt.com/getting-started/installation/pro/nuxt)

<a href="https://chat-template.nuxt.dev/" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NoYXQtdGVtcGxhdGUubnV4dC5kZXYiLCJpYXQiOjE3NDI4NDY2ODB9.n4YCsoNz8xatox7UMoYZFNo7iS1mC_DT0h0A9cKRoTw.jpg?theme=dark">
    <source media="(prefers-color-scheme: light)" srcset="https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NoYXQtdGVtcGxhdGUubnV4dC5kZXYiLCJpYXQiOjE3NDI4NDY2ODB9.n4YCsoNz8xatox7UMoYZFNo7iS1mC_DT0h0A9cKRoTw.jpg?theme=light">
    <img alt="Nuxt AI Chatbot Template" src="https://assets.hub.nuxt.com/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJodHRwczovL2NoYXQtdGVtcGxhdGUubnV4dC5kZXYiLCJpYXQiOjE3NDI4NDY2ODB9.n4YCsoNz8xatox7UMoYZFNo7iS1mC_DT0h0A9cKRoTw.jpg">
  </picture>
</a>

## Features

- ⚡️ **Streaming AI messages** powered by the [Vercel AI SDK ](https://sdk.vercel.ai)
- 🤖 **Multiple model support** via the **SAP AI SDK for JavaScript**
- 🔐 **Authentication** via [nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils)
- 💾 **Chat history persistence** using [NuxtHub database](https://hub.nuxt.com/docs/features/database) and [Drizzle ORM](https://orm.drizzle.team)
- 🚀 **One-click deploy** to your NuxtHub account: [deploy now](https://hub.nuxt.com/new?repo=nuxt-ui-pro/chat)

## Quick Start

```bash
npx nuxi@latest init -t github:nuxt-ui-pro/chat
```

## Setup

Make sure to install the dependencies:

```bash
pnpm install
```

Next, link a NuxtHub project (even if not deployed) to access AI models in development:

```bash
npx nuxthub link
```

> [!TIP]
> It works with free NuxtHub accounts.

To add authentication with GitHub, you need to [create a GitHub OAuth application](https://github.com/settings/applications/new) and then fill the credentials in your `.env`:

```env
NUXT_OAUTH_GITHUB_CLIENT_ID=<your-github-oauth-app-client-id>
NUXT_OAUTH_GITHUB_CLIENT_SECRET=<your-github-oauth-app-client-secret>

# Connection to SAP AI Core

Provide your SAP AI Core service key in the `AICORE_SERVICE_KEY` environment variable so the SAP AI SDK can connect to the orchestration service:

```env
AICORE_SERVICE_KEY='{"clientid":"...","url":"...","clientsecret":"..."}'
```
```

## Development

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

> [!IMPORTANT]
> Make sure to add your [Nuxt UI Pro License](https://ui.nuxt.com/getting-started/license) in order to build for production

Locally preview production build:

```bash
pnpm preview
```

Deploy your project with zero configuration:

```bash
npx nuxthub deploy
```

> [!NOTE]
> NuxtHub will automatically spawn a D1 database and apply the database migrations when deploying your project.

## Renovate integration

Install [Renovate GitHub app](https://github.com/apps/renovate/installations/select_target) on your repository and you are good to go.
