<script setup>
const studiosList = ref([
  {
    id: 1,
    src: 'https://upload.wikimedia.org/wikipedia/commons/d/de/HBO_logo.svg'
  },
  {
    id: 2,
    src: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Warner_Bros_logo.svg'
  },
  {
    id: 3,
    src: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Disney_wordmark.svg'
  },
  {
    id: 4,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png'
  },
  {
    id: 5,
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/DC_Comics_logo.svg'
  },
  {
    id: 6,
    src: 'https://upload.wikimedia.org/wikipedia/commons/3/34/AMC_logo_2019.svg'
  },
  {
    id: 7,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png'
  },
  {
    id: 8,
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Paramount_Pictures_Corporation_logo.svg'
  },
  {
    id: 9,
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg'
  },
  {
    id: 10,
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Apple_TV_Plus_Logo.svg/1280px-Apple_TV_Plus_Logo.svg.png'
  },
])
</script>

<template>
  <div class="px-[148px] my-10">
    <h2 class="title-2 text-center dark:text-secondary">Studios</h2>

    <div class="grid grid-cols-5 gap-5 mt-10">

      <div v-for="item in studiosList" :key="item.id"
        class="!bg-background dark:!bg-secondary w-[150px] h-[150px] rounded-xl flex justify-center items-center p-3">
        <NuxtImg :src="item.src" />
      </div>

    </div>
  </div>
</template>
