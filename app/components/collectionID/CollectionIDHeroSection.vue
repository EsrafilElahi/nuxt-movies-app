<script setup>
import Toolbar from '../Header/Toolbar.vue';

</script>

<template>
  <div class="w-full h-screen relative">
    <NuxtImg
      src="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7967285/JohnWicksHorribleHair.jpg?quality=90&strip=all&crop=0.012500000000003,0,99.975,100"
      alt="hero section" class="w-full h-full object-cover" />

    <Toolbar />

    <CollectionIDHeaderTextMovieInfo />

    <div
      class="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-secondary via-secondary/85 to-transparent dark:bg-gradient-to-t dark:from-background dark:via-background/85 dark:to-transparent">
    </div>


  </div>
</template>