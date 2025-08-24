<script setup>
import { tmdbImage } from '~/lib/tmdbImage';
import Toolbar from '../Header/Toolbar.vue';

defineProps(['dataCollectionID'])

</script>

<template>
  <div class="w-full h-screen relative">
    <NuxtImg :src="tmdbImage.backdrop(dataCollectionID?.backdrop_path)" :alt="dataCollectionID?.name"
      class="w-full h-full object-cover" />

    <Toolbar />

    <CollectionIDHeaderTextMovieInfo :dataCollectionID="dataCollectionID" />

    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-secondary via-secondary/85 to-transparent dark:bg-gradient-to-t dark:from-background dark:via-background/85 dark:to-transparent">
    </div>
  </div>
</template>