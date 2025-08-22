<script setup>
import Carousel from '@/components/Header/Carousel.vue'

const slides = [
  { id: 1, src: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg', alt: 'Slide 3' },
  { id: 2, src: 'https://fifpro.org/media/5chb3dva/lionel-messi_imago1019567000h.jpg?rxy=0.32986930611281567,0.18704579979466449&rnd=133378758718600000', alt: 'Slide 2' },
  { id: 3, src: 'https://cdn.britannica.com/35/238335-050-2CB2EB8A/Lionel-Messi-Argentina-Netherlands-World-Cup-Qatar-2022.jpg', alt: 'Slide 3' },
]
</script>

<template>
  <Carousel :items="slides" :options="{ loop: true, align: 'center' }"
    :autoScroll="{ speed: 2, playOnInit: true, direction: 'forward' }" slide-size="80%" gap="1rem" :show-arrows="true"
    :show-dots="true" :pause-on-hover="true" />
</template>
