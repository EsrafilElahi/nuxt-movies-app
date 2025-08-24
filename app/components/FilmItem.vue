<script setup>
import { tmdbImage } from '~/lib/tmdbImage';

defineProps(['item', 'class'])
</script>

<template>
  <NuxtLink :to="`/films/${item.id}`" class="w-[200px] h-[300px] rounded-lg cursor-pointer" :class="class">
    <NuxtImg :src="tmdbImage.backdrop(item.backdrop_path)" :alt="item.title"
      class="w-[200px] h-[300px] object-cover rounded-lg cursor-pointer" :class="class" />
  </NuxtLink>
</template>
