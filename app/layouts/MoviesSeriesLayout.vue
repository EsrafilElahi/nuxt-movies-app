<script setup>
import Toolbar from '~/components/Header/Toolbar.vue';
import SearchBar from '~/components/SearchBar.vue';
const route = useRoute();
const title = computed(() => route.meta?.layoutProps?.title || 'movies');


</script>

<template>
  <div class="w-full h-full relative">
    <Toolbar />
    <SearchBar :title="title" />

    <h1 class="absolute top-[8%] left-[23%] title-3 text-background-tint-100 dark:text-secondary"
      :class="title === 'collection' ? '!top-[9.5%] !left-[21%]' : ''" v-capitalize>{{
        title
      }}</h1>

    <div class="mt-[330px] mb-10 px-[48px]">
      <slot />

      <Footer />
    </div>
  </div>
</template>
