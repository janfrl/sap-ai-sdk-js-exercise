<script setup lang="ts">
const { params } = useInputParams()

const open = ref(false)
const newKey = ref('')
const newValue = ref('')

const count = computed(() => Object.keys(params.value).length)

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
  <div>
    <UButton
      icon="i-lucide-sliders"
      color="neutral"
      variant="ghost"
      size="xs"
      @click="open = true"
    >
      <span
        v-if="count"
        class="ml-1 text-xs text-white bg-primary rounded-full px-1"
      >
        {{ count }}
      </span>
    </UButton>

    <UModal v-model="open" title="Input Parameters" class="sm:!max-w-md">
      <div class="flex flex-col gap-2">
        <div v-for="(value, key) in params" :key="key" class="flex items-center gap-1 text-sm">
          <span>{{ key }}:</span>
          <span>{{ value }}</span>
          <UButton icon="i-lucide-x" variant="ghost" color="neutral" size="xs" @click="remove(key)" />
        </div>
        <div class="flex items-center gap-1">
          <UInput v-model="newKey" placeholder="Key" size="xs" class="flex-1" />
          <UInput v-model="newValue" placeholder="Value" size="xs" class="flex-1" />
          <UButton label="Add" color="neutral" size="xs" variant="ghost" @click="add" />
        </div>
      </div>
    </UModal>
  </div>
</template>
