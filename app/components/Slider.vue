<script setup>
const props = defineProps(['data', 'title', 'seeMoreUrl']);
const router = useRouter();

const handleRouteSeeMore = () => {
  return router.push(props.seeMoreUrl)
}


</script>

<template>
  <div class="mt-20 z-10 flex flex-col min-h-[300px] px-[48px] gap-4 select-none my-10 overflow-x-hidden">
    <div class="flex justify-between items-end">
      <span v-capitalize class="title-3 dark:text-secondary">{{ title }}</span>
      <span @click="handleRouteSeeMore"
        class="title-medium-4 flex items-center cursor-pointer text-primary hover:!text-background dark:hover:!text-secondary group">see
        more
        <Icon name="custom:arrow-right" size="22"
          class="mt-2 ml-2 text-primary group-hover:!text-background dark:group-hover:!text-secondary" />
      </span>
    </div>

    <div class="flex items-center flex-nowrap gap-[32px] pb-3 overflow-x-auto">
      <div v-for="slide in data" :key="slide.id" class="min-w-[100px] h-[300px] flex-shrink-0">
        <FilmItem :item="slide" />
      </div>
    </div>
  </div>
</template>
