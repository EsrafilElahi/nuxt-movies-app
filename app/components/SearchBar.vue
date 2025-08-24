<script setup>
const config = useRuntimeConfig();
const token = config.public.token;

const { title } = defineProps(["title"]);

const value = ref();
const debouncedValue = useDebounce(value, 500);

const searchKey = computed(() => `search-${debouncedValue?.value}`);
const queryParams = computed(() =>
  debouncedValue?.value?.trim()?.length > 1
    ? { query: debouncedValue?.value, language: "en-US" }
    : { query: undefined }
);

const URLS = {
  movies: "/search/movie",
  series: "/search/tv",
  collections: "/search/collection",
};

const currentURL = computed(() => URLS[title]);

const { data, pending, refresh } = useFetch(() => currentURL.value, {
  baseURL: config?.public?.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },

  key: searchKey,
  query: queryParams,
  immediate: false,
  server: false,
  lazy: true,
});

watch(debouncedValue, (newDebouncedValue) => {
  if (newDebouncedValue?.trim()?.length > 1) {
    refresh();
  } else {
    data.value = null;
  }
});

watch(() => title, () => {
  value.value = null
});

onBeforeRouteLeave((to, from, next) => {
  value.value = null;
  next();
});


defineExpose({
  searchData: data,
  isLoading: pending
});

</script>

<template>
  <VToolbar density="compact"
    class="!w-[40%] !text-background-tint-100 px-2 !absolute !top-36 !left-1/2 !-translate-x-1/2 !bg-transparent/30 !backdrop-blur-md !backdrop-filter !border !border-primary/20 !rounded-2xl">
    <VTextField v-model="value" :placeholder="'search ' + title" class="!text-secondary" />
  </VToolbar>
</template>
