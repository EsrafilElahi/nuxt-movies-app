<script setup>
defineProps(['item', 'class'])
</script>

<template>
  <NuxtLink :to="`/films/${item.id}`" class="w-[200px] h-[300px] rounded-lg cursor-pointer" :class="class">
    <NuxtImg :src="item.img" class="w-[200px] h-[300px] object-cover rounded-lg cursor-pointer" :class="class" />
  </NuxtLink>
</template>
