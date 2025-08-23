<script setup>
definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'collection'
  }
});

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
}


const sliders = ref([
  {
    id: 1,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 2,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 3,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 4,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 5,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 6,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 7,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 8,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 9,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 10,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  }
]);
</script>

<template>
  <div class="">
    <div class="flex justify-between items-end mb-3">
      <span v-capitalize class="title-3 dark:text-secondary">Collections</span>

      <Tabs :tabs="tabs" :chosenTab="chosenTab" @setChoose="setChoose" />
    </div>

    <div class="grid grid-cols-6 gap-10">
      <div v-for="item in sliders" :key="item.id">
        <CollectionFilmItem :item="item" />
      </div>
    </div>
  </div>
</template>
