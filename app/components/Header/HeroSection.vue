<script setup>
import Carousel from './Carousel.vue';

const slides = [
  { id: 1, src: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg', alt: 'Slide 3' },
  { id: 2, src: 'https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000', alt: 'Slide 2' },
  { id: 3, src: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg', alt: 'Slide 3' },
]
</script>

<template>
  <div class="w-full h-screen">
    <NuxtImg src="https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg"
      alt="hero section" class="w-full h-full object-cover" />

    <HeaderTextMovieInfo />

    <div class="absolute right-40 bottom-40 z-10">
      <Carousel :items="slides" :options="{ loop: true, align: 'center' }"
        :autoScroll="{ speed: 2, playOnInit: true, direction: 'forward' }" slide-size="80%" gap="1rem"
        :show-arrows="true" :show-dots="true" :pause-on-hover="true" />
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-secondary via-secondary/85 to-transparent dark:bg-gradient-to-t dark:from-background dark:via-background/85 dark:to-transparent">
    </div>
  </div>
</template>