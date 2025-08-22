<script setup>
defineProps(['title']);
</script>

<template>
  <VToolbar density="compact"
    class="!w-[40%] !text-background-tint-100 px-2 !absolute !top-36 !left-1/2 !-translate-x-1/2 !bg-transparent/30 !backdrop-blur-md !backdrop-filter !border !border-primary/20 !rounded-2xl">

    <VTextField :placeholder="'search ' + title" class="!text-secondary" />
  </VToolbar>
</template>