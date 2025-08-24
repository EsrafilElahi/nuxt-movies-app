<script setup>
import { useGetAllMovies } from '~/api/moviesApi/moviesVueQuery';

definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'movies'
  }
});

const { data: allMovies, isLoading } = useGetAllMovies();

</script>

<template>
  <div>
    <div v-if="isLoading" class="text-center mr-auto w-full">isLoading...</div>

    <div v-else class="grid grid-cols-6 gap-10">
      <div v-for="item in allMovies?.results" :key="item.id">
        <FilmItem :item="item" />
      </div>
    </div>
  </div>
</template>
