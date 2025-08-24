<script setup>
const isDarkMode = useDarkTheme();
defineProps(['dataFilmID'])

</script>

<template>
  <div class="absolute right-[100px] bottom-[40%] z-10 max-w-[500px]">
    <div class="flex items-center gap-3 mt-4">
      <VBtn rounded class="pb-1">
        <template #default>
          <span class="flex items-center body-medium dark:text-secondary">
            <Icon name="custom:play"
              :style="{ color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-background)' }" class="mt-1 mr-1"
              size="23" />
            Watch Movie
          </span>
        </template>
      </VBtn>

      <VBtn variant="outlined" rounded class="pb-1">
        <template #default>
          <span class="flex items-center body-medium dark:text-secondary">
            More Info

            <Icon name="custom:arrow-right"
              :style="{ color: isDarkMode ? 'var(--color-secondary)' : 'var(--color-background)' }" class="mt-1 ml-2"
              size="23" />
          </span>
        </template>
      </VBtn>
    </div>
  </div>
</template>
