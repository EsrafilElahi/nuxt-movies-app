<script setup>
const theme = useTheme();
const isDarkMode = useDarkTheme();

const iconName = computed(() => {
  return isDarkMode.value ? 'custom:sun' : 'custom:moon'
});
const iconColor = computed(() => {
  return isDarkMode.value ? 'var(--color-secondary)' : 'var(--color-background)'
})

</script>

<template>
  <div class="ml-auto">
    <VBtn @click="theme.toggle()">
      <KeepAlive>
        <Icon :name="iconName" size="22" :style="{ color: iconColor }" />
      </KeepAlive>
    </VBtn>
  </div>
</template>
