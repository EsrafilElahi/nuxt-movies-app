<script setup>
import { defineAsyncComponent } from 'vue'
import { useTheme } from 'vuetify'
import { useGetCollections, useGetMovies, useGetSeries, useGetTrendMovies } from '~/api/homeApi/homeVueQuery';
import HeroSection from '~/components/Header/HeroSection.vue';

const Pricing = defineAsyncComponent({
  loader: () => import('~/components/pricing.vue'),
  loadingComponent: {
    template: '<div>Loading Pricing...</div>'
  },
  errorComponent: {
    template: '<div>Error loading Pricing component</div>'
  },
  delay: 200,
  timeout: 3000
});

const theme = useTheme();

watch(theme, (newVal) => {
  console.log('newVal :', newVal)
})

const pricingRef = ref(null);
const PricingRef = useState('handlePricingRef');

const handlePricingRefFn = () => {
  if (pricingRef.value) {
    pricingRef.value.handleScrollToRef()
  }
}

onMounted(() => {
  PricingRef.value = handlePricingRefFn
});

const { data: trendsMovies, isLoading: trendsMoviesIsLoading } = useGetTrendMovies();
const { data: movies, isLoading: moviesIsLoading } = useGetMovies();
const { data: series, isLoading: seriesIsLoading } = useGetSeries();
const { data: collections, isLoading: collectionsIsLoading } = useGetCollections();

</script>

<template>
  <div>
    <HeroSection />

    <Slider :title="'trends'" :seeMoreUrl="'/movies'" :data="trendsMovies" :isLoading="trendsMoviesIsLoading" />
    <Slider :title="'movies'" :seeMoreUrl="'/movies'" :data="movies" :isLoading="moviesIsLoading" />
    <Slider :title="'series'" :seeMoreUrl="'/series'" :data="series" :isLoading="seriesIsLoading" />

    <Suspense>
      <template #default>
        <Pricing ref="pricingRef" />
      </template>

      <template #fallback>
        <div class="flex justify-center items-center h-64">
          <div>Loading Pricing...</div>
        </div>
      </template>
    </Suspense>

    <CollectionSlider :title="'collection'" :seeMoreUrl="'/collection'" :data="collections" :isLoading="collectionsIsLoading" />

    <Studios />

  </div>
</template>
