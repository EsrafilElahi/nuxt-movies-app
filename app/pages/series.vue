<script setup>
import { useGetAllSeries } from '~/api/seriesApi/seriesVueQuery';

definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'series'
  }
});

const { data: allSeries } = useGetAllSeries()

</script>

<template>
  <div class="grid grid-cols-6 gap-10">
    <div v-for="item in allSeries?.results" :key="item.id">
      <FilmItem :item="item" />
    </div>
  </div>
</template>
