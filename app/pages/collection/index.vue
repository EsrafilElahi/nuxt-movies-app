<script setup>
import { useSearchDataStore } from '~/stores/useSearchDataStore';
import { useGetAllCollections } from '~/api/collectionsApi/collectionsVueQuery';

definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'collections'
  }
});

const searchDataStore = useSearchDataStore();

const searchData = computed(() => searchDataStore?.getSearchData);
const searchIsLoading = computed(() => searchDataStore.getSearchDataIsLoading);

const tabs = [
  {
    id: 1,
    name: 'movies'
  },
  {
    id: 2,
    name: 'series'
  }
];

const chosenTab = ref({
  id: 1,
  name: 'movies'
});

const setChoose = (newVal) => {
  return chosenTab.value = newVal
};

const { data: allCollections, isLoading } = useGetAllCollections();

const filteredData = computed(() => {
  if (searchData.value?.results?.length > 0) {
    return searchData.value;
  }
  else {
    return allCollections.value || { results: [] };
  }
});

const filteredLoading = computed(() => {
  return searchIsLoading.value || isLoading.value;
});

</script>

<template>
  <div>
    <div v-if="filteredLoading" class="text-center mr-auto w-full">isLoading...</div>

    <div v-else class="">
      <div class="flex justify-between items-end mb-3">
        <span v-capitalize class="title-3 dark:text-secondary">Collections</span>

        <Tabs :tabs="tabs" :chosenTab="chosenTab" @setChoose="setChoose" />
      </div>

      <div class="grid grid-cols-6 gap-10">
        <div v-for="item in filteredData?.results" :key="item.id">
          <CollectionFilmItem :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>
