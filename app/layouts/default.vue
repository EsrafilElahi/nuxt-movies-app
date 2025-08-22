<script setup>
import Toolbar from '~/components/Header/Toolbar.vue';


</script>

<template>
  <div class="w-full h-full">
    <Toolbar />

    <slot />

    <Footer />
  </div>
</template>
