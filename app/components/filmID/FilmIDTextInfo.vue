<script setup>
defineProps(['dataFilmID']);

</script>

<template>
  <div class="mt-20 mb-10 px-[48px]">
    <h1 class="title-2 dark:text-secondary">About {{ dataFilmID?.title }}</h1>

    <p class="mt-4 body-normal dark:text-secondary">{{ dataFilmID?.overview }}</p>

    <div class="flex flex-col items-start justify-start gap-3 mt-7">
      <h2 class="title-3 dark:text-secondary">Genres</h2>

      <div class="flex justify-start items-center gap-3">
        <span v-for="item in dataFilmID?.genres" :key="item?.id"
          class="rounded-xl py-2 !pb-[11px] px-3 !bg-deep dark:text-secondary">{{ item?.name }}</span>
      </div>
    </div>
  </div>
</template>
