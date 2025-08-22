<script setup>
import Toolbar from '~/components/Header/Toolbar.vue';
import SearchBar from '~/components/SearchBar.vue';
const route = useRoute();
const title = computed(() => route.meta?.layoutProps?.title || 'messi');


</script>

<template>
  <div class="w-full h-full relative">
    <Toolbar />
    <SearchBar :title="title" />

    <h1 class="absolute top-[14.4%] left-[23%] title-3 text-background-tint-100 dark:text-secondary" v-capitalize>{{
      title
      }}</h1>

    <div class="mt-[330px] mb-10 px-[48px]">
      <slot />
    </div>
  </div>
</template>
