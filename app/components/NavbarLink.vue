<script setup>
const route = useRoute();

const links = ref([
  {
    id: 1,
    name: 'Home',
    path: '/'
  },
  {
    id: 2,
    name: 'Movies',
    path: '/movies'
  },
  {
    id: 3,
    name: 'Series',
    path: '/series'
  },
  {
    id: 4,
    name: 'Collection',
    path: '/collection'
  }
]);

const isActive = (path) => {
  if (path === '/') {
    return route.fullPath === '/'
  }
  return route.fullPath.startsWith(path)
}
</script>

<template>
  <div class="flex items-center gap-5">
    <div v-for="link in links">
      <NuxtLink :key="link.id" :to="link.path" :class="[
        'title-medium-4 pb-1',
        'transition-colors duration-200 ease-in-out',
        'hover:text-secondary',
        'dark:text-secondary dark:hover:text-background',
        isActive(link?.path) ? 'border-b-2 border-primary' : 'border-b-0',
      ]">
        {{ link.name }}
      </NuxtLink>
    </div>

  </div>
</template>
