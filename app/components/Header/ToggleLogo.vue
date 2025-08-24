<script setup>
const isDarkMode = useDarkTheme();

const iconName = computed(() => {
  return isDarkMode.value ? 'custom:light-logo' : 'custom:dark-logo'
});

</script>

<template>
  <NuxtLink to="/">
    <KeepAlive>
      <Icon :name="iconName" size="75" />
    </KeepAlive>
  </NuxtLink>
</template>
