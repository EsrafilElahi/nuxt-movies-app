<script setup>
definePageMeta({
  layout: 'movies-series-layout',
  layoutProps: {
    title: 'movies'
  }
})


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
  <div class="grid grid-cols-5 gap-10">
    <div v-for="item in sliders" :key="item.id">
      <FilmItem :item="item" />
    </div>
  </div>
</template>
