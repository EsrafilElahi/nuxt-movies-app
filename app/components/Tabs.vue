<script setup>
defineProps(['tabs', 'chosenTab']);
const emit = defineEmits(['setChoose'])

</script>

<template>
  <div class="flex justify-between items-stretch h-[48px] cursor-pointer border-2 border-primary rounded-[28px]">

    <div v-for="tab in tabs" :key="tab.id"
      class="rounded-r-[20px] rounded-l-[20px] text-secondary p-3 w-[80px] text-center transition-colors duration-200 dark:!text-secondary"
      :class="chosenTab.id === tab.id ? '!bg-primary !text-secondary' : '!text-background-tint-100'"
      @click="emit('setChoose', tab)">
      {{ tab.name }}
    </div>
  </div>
</template>
