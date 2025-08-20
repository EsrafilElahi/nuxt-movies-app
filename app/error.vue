<!-- eslint-disable vue/no-dupe-keys -->
<script setup>
const props = defineProps({
  error: Object
});

const error = useError();

</script>

<template>
  <div>
    <div>error status : {{ error.statusCode }}</div>
    <div>error message : {{ error.message }}</div>
  </div>
</template>
