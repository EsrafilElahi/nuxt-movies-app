<script setup>
const theme = useTheme();

watchEffect(() => {
  console.log('theme :', theme);
})

</script>

<template>
  <div>
    <VBtn @click="theme.toggle()">
      toggle theme
    </VBtn>
  </div>
</template>
