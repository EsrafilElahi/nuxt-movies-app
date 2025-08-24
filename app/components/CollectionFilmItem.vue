<script setup>
import { tmdbImage } from '~/lib/tmdbImage';

defineProps(['item'])
</script>

<template>
  <NuxtLink :to="`/collection/${item.id}`" class="w-[200px] h-[300px] rounded-lg cursor-pointer relative">
    <NuxtImg :src="tmdbImage.backdrop(item.backdrop_path)" :alt="item.name"
      class="w-full h-[300px] object-cover rounded-lg cursor-pointer" />
    <div class="absolute inset-0 bg-black !opacity-[50%] rounded-lg z-10 cursor-pointer"></div>

    <h3
      class="title-3 text-center text-secondary absolute !top-1/2 !left-1/2 !-translate-x-1/2 cursor-pointer !-translate-y-1/2 z-20 p-3">
      {{ item.name }}
    </h3>
  </NuxtLink>
</template>
