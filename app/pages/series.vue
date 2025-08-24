<script setup>
import { useGetAllSeries } from '~/api/seriesApi/seriesVueQuery';

definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'series'
  }
});

const { data: allSeries, isLoading } = useGetAllSeries()

</script>

<template>
  <div>
    <div v-if="isLoading" class="text-center mr-auto w-full">isLoading...</div>

    <div v-else class="grid grid-cols-6 gap-10">
      <div v-for="item in allSeries?.results" :key="item.id">
        <FilmItem :item="item" />
      </div>
    </div>
  </div>
</template>
