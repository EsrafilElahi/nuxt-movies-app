<script setup>
import { tmdbImage } from '~/lib/tmdbImage';

defineProps(['item'])
</script>

<template>
  <div class="rounded-[20px] !border-[2px] !border-primary w-full h-full">
    <NuxtImg :src="tmdbImage.backdrop(item?.logo_path)" class="rounded-[17px] object-contain w-full h-full p-2" />
  </div>

</template>
