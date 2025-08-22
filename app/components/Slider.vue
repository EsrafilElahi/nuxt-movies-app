<script setup>

const sliders = ref([
  {
    id: 1,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 2,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 3,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 4,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 5,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 6,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 7,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 8,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 9,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 10,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  }
])

</script>

<template>
  <div
    class="mt-20 z-10 flex justify-between items-center gap-[32px] min-h-[300px] px-[48px] pb-3 select-none my-10 overflow-x-auto">
    <div v-for="slide in sliders" :key="slide.id" class="min-w-[200px] min-h-[300px]">
      <NuxtImg :src="slide.img" class="min-w-[200px] min-h-[300px] object-cover" />
    </div>
  </div>
</template>
