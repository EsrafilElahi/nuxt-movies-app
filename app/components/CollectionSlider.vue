<script setup>
const props = defineProps(['data', 'title', 'seeMoreUrl']);
const router = useRouter();


const handleRouteSeeMore = () => {
  return router.push(props.seeMoreUrl)
};

const tabs = [
  {
    id: 1,
    name: 'movies'
  },
  {
    id: 2,
    name: 'series'
  }
];

const chosenTab = ref({
  id: 1,
  name: 'movies'
});

watchEffect(() => {
  console.log('chosenTab :', chosenTab.value)
})

const setChoose = (newVal) => {
  return chosenTab.value = newVal
}

</script>

<template>
  <div class="mt-20 z-10 flex flex-col min-h-[300px] px-[48px] gap-4 select-none my-10 overflow-x-hidden">
    <div class="flex justify-between items-end">
      <span v-capitalize class="title-3 dark:text-secondary">{{ title }}</span>

      <Tabs :tabs="tabs" :chosenTab="chosenTab" @setChoose="setChoose" />
    </div>


    <div class="flex items-center flex-nowrap gap-[32px] pb-3 overflow-x-auto">
      <div v-for="slide in data" :key="slide.id" class="min-w-[200px] h-[300px] flex-shrink-0 relative">
        <NuxtImg :src="slide.img" class="min-w-[200px] h-[300px] object-cover rounded-lg cursor-pointer" />
        <div class="absolute inset-0 bg-black !opacity-[50%] rounded-lg z-10 cursor-pointer"></div>

        <h3
          class="title-2 text-secondary absolute !top-1/2 !left-1/2 !-translate-x-1/2 cursor-pointer !-translate-y-1/2 z-20 p-3">
          Comedy
        </h3>
      </div>
    </div>
  </div>
</template>
