<script setup>
import { defineAsyncComponent } from 'vue'
import { useTheme } from 'vuetify'
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
})
const theme = useTheme();

watch(theme, (newVal) => {
  console.log('newVal :', newVal)
})

watchEffect(() => {
  console.log('theme watchEffect :', theme)
})

const sliders = ref([
  {
    id: 1,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 2,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 3,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 4,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 5,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 6,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 7,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 8,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 9,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  },
  {
    id: 10,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg',
    title: 'Comedy'
  }
]);

const pricingRef = ref(null);
const PricingRef = useState('handlePricingRef');

const handlePricingRefFn = () => {
  if (pricingRef.value) {
    pricingRef.value.handleScrollToRef()
  }
}

onMounted(() => {
  PricingRef.value = handlePricingRefFn
})

</script>

<template>
  <div>
    <HeroSection />

    <Slider :title="'trends'" :seeMoreUrl="'/movies'" :data="sliders" />
    <Slider :title="'movies'" :seeMoreUrl="'/movies'" :data="sliders" />
    <Slider :title="'series'" :seeMoreUrl="'/series'" :data="sliders" />

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

    <CollectionSlider :title="'collection'" :seeMoreUrl="'/collection'" :data="sliders" />

    <Studios />

  </div>
</template>
