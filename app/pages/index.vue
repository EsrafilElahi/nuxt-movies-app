<script setup>
import { useTheme } from 'vuetify'
import HeroSection from '~/components/Header/HeroSection.vue';

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
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 2,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 3,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 4,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 5,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 6,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 7,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 8,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 9,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
  },
  {
    id: 10,
    img: 'https://wallpapercat.com/w/full/1/9/1/118652-3840x2160-desktop-4k-avengers-background-image.jpg'
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

    <Pricing ref="pricingRef" />
  </div>
</template>
