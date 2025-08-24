<script setup>
import { useSearchDataStore } from '~/stores/useSearchDataStore';
import { useGetAllMovies } from '~/api/moviesApi/moviesVueQuery';

const searchDataStore = useSearchDataStore();

const searchData = computed(() => searchDataStore?.getSearchData);
const searchIsLoading = computed(() => searchDataStore.getSearchDataIsLoading);

definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'movies'
  }
});

const { data: allMovies, isLoading } = useGetAllMovies();

const filteredData = computed(() => {
  if (searchData.value?.results?.length > 0) {
    return searchData.value;
  }
  else {
    return allMovies.value || { results: [] };
  }
});

const filteredLoading = computed(() => {
  return searchIsLoading.value || isLoading.value;
});

</script>

<template>
  <div>
    <div v-if="filteredLoading" class="text-center mr-auto w-full">isLoading...</div>

    <div v-else class="grid grid-cols-6 gap-10">
      <div v-for="item in filteredData?.results" :key="item.id">
        <FilmItem :item="item" />
      </div>
    </div>
  </div>
</template>
