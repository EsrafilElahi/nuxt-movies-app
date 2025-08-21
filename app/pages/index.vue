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

</script>

<template>
  <div class="w-full h-full">
    <HeroSection />
  </div>
</template>
