<script setup>
import { useTheme } from 'vuetify'

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
