<script setup>
import { tmdbImage } from '~/lib/tmdbImage';
import Toolbar from '../Header/Toolbar.vue';

defineProps(['dataFilmID'])

</script>

<template>
  <div class="w-full h-screen relative">
    <NuxtImg :src="tmdbImage.backdrop(dataFilmID?.backdrop_path)" :alt="dataFilmID?.title"
      class="w-full h-full object-cover" />

    <Toolbar />

    <FilmIDHeaderTextMovieInfo :dataFilmID="dataFilmID" />
    <FilmIDHeaderBtnMovieInfo :dataFilmID="dataFilmID" />


    <div class="grid grid-cols-5 gap-10 px-[48px] absolute bottom-0 left-0 z-10 -mb-12">
      <FilmIDPictures v-for="item in dataFilmID?.production_companies" :key="item.id" :item="item" />
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-secondary via-secondary/85 to-transparent dark:bg-gradient-to-t dark:from-background dark:via-background/85 dark:to-transparent">
    </div>


  </div>
</template>