<script setup>
defineProps(['item'])
</script>

<template>
  <NuxtLink :to="`/films/${item.id}`" class="min-w-[200px] h-[300px] object-cover rounded-lg cursor-pointer">
    <NuxtImg :src="item.img" class="min-w-[200px] h-[300px] object-cover rounded-lg cursor-pointer" />
  </NuxtLink>
</template>
