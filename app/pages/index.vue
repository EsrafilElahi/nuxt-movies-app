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

const { data: trendsMovies } = useGetTrendMovies();
const { data: movies } = useGetMovies();
const { data: series } = useGetSeries();
const { data: collections } = useGetCollections();

</script>

<template>
  <div>
    <HeroSection />

    <Slider :title="'trends'" :seeMoreUrl="'/movies'" :data="trendsMovies" />
    <Slider :title="'movies'" :seeMoreUrl="'/movies'" :data="movies" />
    <Slider :title="'series'" :seeMoreUrl="'/series'" :data="series" />

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

    <CollectionSlider :title="'collection'" :seeMoreUrl="'/collection'" :data="collections" />

    <Studios />

  </div>
</template>
