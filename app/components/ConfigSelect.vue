<script setup lang="ts">
const { config, configs } = useExerciseConfig()
</script>

<template>
  <USelectMenu
    v-model="config"
    :items="configs"
    variant="ghost"
    class="min-w-48 hover:bg-default focus:bg-default data-[state=open]:bg-default"
    :ui="{ trailingIcon: 'group-data-[state=open]:rotate-180 transition-transform duration-200' }"
  />
</template>
