<script setup>
import Toolbar from '../Header/Toolbar.vue';

const filmIDImages = ref([
  {
    id: 1,
    src: "https://static01.nyt.com/images/2019/05/17/arts/johnwickaction1/johnwickaction1-superJumbo.jpg"
  },
  {
    id: 2,
    src: "https://static01.nyt.com/images/2019/05/17/arts/johnwickaction1/johnwickaction1-superJumbo.jpg"
  },
  {
    id: 3,
    src: "https://static01.nyt.com/images/2019/05/17/arts/johnwickaction1/johnwickaction1-superJumbo.jpg"
  },
  {
    id: 4,
    src: "https://static01.nyt.com/images/2019/05/17/arts/johnwickaction1/johnwickaction1-superJumbo.jpg"
  },
  {
    id: 5,
    src: "https://static01.nyt.com/images/2019/05/17/arts/johnwickaction1/johnwickaction1-superJumbo.jpg"
  }
])

</script>

<template>
  <div class="w-full h-screen relative">
    <NuxtImg
      src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7967285/JohnWicksHorribleHair.jpg?quality=90&strip=all&crop=0.012500000000003,0,99.975,100"
      alt="hero section" class="w-full h-full object-cover" />

    <Toolbar />

    <FilmIDHeaderTextMovieInfo />
    <FilmIDHeaderBtnMovieInfo />


    <div class="grid grid-cols-5 gap-10 px-[48px] absolute bottom-0 left-0 z-10 -mb-12">
      <FilmIDPictures v-for="item in filmIDImages" :key="item.id" :item="item" />
    </div>

    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-secondary via-secondary/85 to-transparent dark:bg-gradient-to-t dark:from-background dark:via-background/85 dark:to-transparent">
    </div>


  </div>
</template>