<script setup lang="ts">
const input = ref('')
const loading = ref(false)

const { model } = useLLM()
const { config } = useExerciseConfig()

async function createChat(prompt: string) {
  input.value = prompt
  loading.value = true
  const chat = await $fetch('/api/chats', {
    method: 'POST',
    body: { input: prompt },
  })

  refreshNuxtData('chats')
  navigateTo(`/chat/${chat.id}`)
}

function onSubmit() {
  createChat(input.value)
}

const quickChats = [
  {
    label: 'How to integrate SAP AI Core with Nuxt 3?',
    icon: 'i-logos-nuxt-icon',
  },
  {
    label: 'Getting started with SAP AI SDK in Nuxt UI Pro',
    icon: 'i-logos-sap',
  },
  {
    label: 'Best practices for deploying ML models on SAP AI Core',
    icon: 'i-mdi-robot',
  },
  {
    label: 'Implementing authentication flows in SAP AI SDK',
    icon: 'i-mdi-shield-account',
  },
  {
    label: 'Customizing themes and components in Nuxt UI Pro',
    icon: 'i-mdi-palette',
  },
]
</script>

<template>
  <UDashboardPanel id="home" :ui="{ body: 'p-0 sm:p-0' }">
    <template #header>
      <DashboardNavbar />
    </template>

    <template #body>
      <UContainer class="flex-1 flex flex-col justify-center gap-4 sm:gap-6 py-8">
        <h1 class="text-3xl sm:text-4xl text-highlighted font-bold">
          How can I help you today?
        </h1>

        <UChatPrompt
          v-model="input"
          :status="loading ? 'streaming' : 'ready'"
          class="[view-transition-name:chat-prompt]"
          variant="subtle"
          @submit="onSubmit"
        >
          <UChatPromptSubmit color="neutral" />

          <template #footer>
            <div class="flex gap-2">
              <ModelSelect v-model="model" />
              <ConfigSelect v-model="config" />
              <InputParams />
            </div>
          </template>
        </UChatPrompt>

        <div class="flex flex-wrap gap-2">
          <UButton
            v-for="quickChat in quickChats"
            :key="quickChat.label"
            :icon="quickChat.icon"
            :label="quickChat.label"
            size="sm"
            color="neutral"
            variant="outline"
            class="rounded-full"
            @click="createChat(quickChat.label)"
          />
        </div>
      </UContainer>
    </template>
  </UDashboardPanel>
</template>
