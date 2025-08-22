<script setup>
</script>

<template>
  <div class="absolute left-[100px] top-[40%] z-10 max-w-[500px]">
    <h1 class="title-2 dark:text-secondary">John Wick 4</h1>
    <p class="body-medium dark:text-secondary">1h 54m - 2023-USA</p>

    <div class="flex items-center gap-2 mt-4">
      <div
        class="rounded-full flex justify-center items-center p-[7px] group cursor-pointer !bg-secondary-tint-300 dark:!bg-background border-2 border-primary">
        <Icon name="custom:bookmark" size="23"
          class="!text-background group-hover:cursor-pointer dark:!text-secondary" />
      </div>
      <div
        class="rounded-full flex justify-center items-center p-[7px] group cursor-pointer !bg-secondary-tint-300 dark:!bg-background border-2 border-primary">
        <Icon name="custom:like" size="22" class="!text-background group-hover:cursor-pointer dark:!text-secondary" />
      </div>

      <div
        class="rounded-full flex justify-center items-center p-[7px] group cursor-pointer !bg-secondary-tint-300 dark:!bg-background border-2 border-primary">
        <Icon name="custom:dislike" size="22"
          class="!text-background group-hover:cursor-pointer dark:!text-secondary" />
      </div>
    </div>
  </div>
</template>
