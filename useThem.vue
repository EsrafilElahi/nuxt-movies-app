defineAsyncComponent --> code splitting
component :is two components
defineExpose
defineModel
defineEmit
slot v-bind:propsData
// -------- child component --------
<script setup>
const greetingMessage = 'hello'
</script>

<template>
  <div>
  	<slot :text="greetingMessage" :count="1"></slot>
	</div>
</template>


// -------- parent component --------
<script setup>
import MyComponent from './MyComponent.vue'
</script>

<template>
	<MyComponent v-slot="slotProps">
		{{ slotProps.text }} {{ slotProps.count }}
	</MyComponent>
</template>