<script setup>
const isDarkMode = useDarkTheme();

</script>

<template>
  <VToolbar density="compact"
    class="!w-[60%] !text-background-tint-100 py-1 px-10 !absolute !top-10 !left-1/2 !-translate-x-1/2 !bg-transparent/30 !backdrop-blur-md !backdrop-filter !border !border-primary/20 !rounded-2xl">
    <ToggleLogo />
    <NavbarLink />

    <ToggleTheme />
  </VToolbar>
</template>