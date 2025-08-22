<script setup>
const casts = [
  {
    id: 1,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 2,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 3,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 4,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 5,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 6,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 7,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 8,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 9,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 6,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 7,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 8,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 9,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 6,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 7,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 8,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },
  {
    id: 9,
    src: 'https://i.insider.com/5d095357f2f4797d26014d2e?width=700'
  },

]

</script>

<template>
  <div class="my-10 px-[48px]">
    <h1 class="title-3 mb-4 dark:text-secondary" v-capitalize>Characters</h1>

    <div class="flex flex-nowrap items-center gap-7 overflow-x-auto pb-3 select-none">
      <NuxtImg v-for="cast in casts" :key="cast.id" :src="cast.src" draggable="false"
        class="rounded-full w-[130px] h-[130px] object-cover" />
    </div>
  </div>
</template>
