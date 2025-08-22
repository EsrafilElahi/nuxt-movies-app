<script setup>
defineProps(['item'])
</script>

<template>
  <NuxtLink :to="`/films/${item.id}`" class="w-[200px] h-[300px] rounded-lg cursor-pointer">
    <NuxtImg :src="item.img" class="w-[200px] h-[300px] object-cover rounded-lg cursor-pointer" />
  </NuxtLink>
</template>
