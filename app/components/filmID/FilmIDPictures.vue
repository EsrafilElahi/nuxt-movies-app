<script setup>
defineProps(['item'])
</script>

<template>
  <div class="rounded-[20px] !border-[2px] !border-primary w-full h-full">
    <NuxtImg :src="item.src" class="rounded-[17px] object-cover w-full h-full" />
  </div>

</template>
