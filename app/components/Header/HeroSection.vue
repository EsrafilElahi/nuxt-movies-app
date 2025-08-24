<script setup>
import { useGetMovies } from '~/api/homeApi/homeVueQuery';
import Carousel from './Carousel.vue';
import Toolbar from './Toolbar.vue';
import { tmdbImage } from '~/lib/tmdbImage';

const { data: heroSectionMovies } = useGetMovies();
const activeItem = ref(null);

const handleActiveItem = (newItem) => {
  activeItem.value = newItem
}
</script>

<template>
  <div class="w-full h-screen relative">
    <NuxtImg :src="tmdbImage.poster(activeItem?.backdrop_path, 'w780')" :alt="activeItem?.title"
      class="w-full h-full object-cover" />

    <div class="absolute bottom-0 left-0 w-full h-full bg-black opacity-[50%]">
    </div>

    <Toolbar />

    <HeaderTextMovieInfo :activeItem="activeItem" />

    <div class="absolute right-40 bottom-40 z-10">
      <Carousel @handleActiveItem="handleActiveItem" :items="heroSectionMovies" :options="{ align: 'center' }"
        :autoScroll="{ direction: 'forward' }" slide-size="80%" gap="1rem" :show-arrows="true" :show-dots="true"
        :pause-on-hover="true" />
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-secondary via-secondary/85 to-transparent dark:bg-gradient-to-t dark:from-background dark:via-background/85 dark:to-transparent">
    </div>
  </div>
</template>