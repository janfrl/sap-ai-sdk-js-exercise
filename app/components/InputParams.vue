<script setup lang="ts">
import type { TableColumn } from '@nuxt/ui'

const { params } = useInputParams()

const open = ref(false)
const newKey = ref('')
const newValue = ref('')

const count = computed(() => Object.keys(params.value).length)

const data = computed(() =>
  Object.entries(params.value).map(([key, value]) => ({ key, value })),
)

const UButton = resolveComponent('UButton')

const columns: TableColumn<{ key: string, value: string }>[] = [
  {
    id: 'actions',
    header: '',
    cell: ({ row }) =>
      h(UButton, {
        icon: 'i-lucide-minus',
        variant: 'ghost',
        color: 'neutral',
        size: 'xs',
        onClick: () => remove(row.original.key),
      }),
  },
  { accessorKey: 'key', header: 'Key' },
  { accessorKey: 'value', header: 'Value' },
]

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
  <UModal v-model="open" title="Input Parameters">
    <UChip :text="count" size="3xl" color="neutral">
      <UButton
        icon="i-lucide-sliders"
        color="neutral"
        variant="ghost"
        @click="open = true"
      >
        Parameters
      </UButton>
    </UChip>

    <template #body>
      <div class="flex flex-col gap-4">
        <UTable :data="data" :columns="columns" />
        <div class="flex items-center gap-2">
          <UInput v-model="newKey" placeholder="Key" class="flex-1" />
          <UInput v-model="newValue" placeholder="Value" class="flex-1" />
          <UButton label="Add" color="neutral" variant="soft" @click="add" />
        </div>
      </div>
    </template>
  </UModal>
</template>
