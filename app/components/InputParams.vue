<script setup lang="ts">
const { params } = useInputParams()
const newKey = ref('')
const newValue = ref('')

function add() {
  if (!newKey.value)
    return
  params.value = { ...params.value, [newKey.value]: newValue.value }
  newKey.value = ''
  newValue.value = ''
}

function remove(key: string) {
  const { [key]: _, ...rest } = params.value
  params.value = rest
}
</script>

<template>
  <div class="flex flex-col gap-2">
    <div v-for="(value, key) in params" :key="key" class="flex items-center gap-1 text-sm">
      <span>{{ key }}:</span>
      <span>{{ value }}</span>
      <UButton icon="i-lucide-x" variant="ghost" color="neutral" size="2xs" @click="remove(key)" />
    </div>
    <div class="flex items-center gap-1">
      <UInput v-model="newKey" placeholder="Key" size="xs" class="flex-1" />
      <UInput v-model="newValue" placeholder="Value" size="xs" class="flex-1" />
      <UButton label="Add" color="neutral" size="xs" variant="ghost" @click="add" />
    </div>
  </div>
</template>
