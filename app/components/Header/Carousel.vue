<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EmblaCarousel from 'embla-carousel'
// import AutoScroll from 'embla-carousel-auto-scroll'

const props = defineProps({
  items: { type: Array, required: true },
  options: { type: Object, default: () => ({ loop: false }) },
  // autoScroll: { type: Object, default: () => ({ speed: 4, playOnInit: true }) }
})

const emblaNode = ref(null)
const emblaApi = ref(null)
const activeIndex = ref(0)

onMounted(() => {
  emblaApi.value = EmblaCarousel(emblaNode.value, props.options, [])

  // وقتی انتخاب تغییر کرد
  emblaApi.value.on('select', () => {
    activeIndex.value = emblaApi.value.selectedScrollSnap()
  })

  // مقدار اولیه
  activeIndex.value = emblaApi.value.selectedScrollSnap()
})

onUnmounted(() => {
  emblaApi.value?.destroy()
})
</script>

<template>
  <div class="overflow-hidden w-[400px] max-h-[300px]" ref="emblaNode">
    <div class="flex max-h-[300px] h-full">
      <div v-for="(item, index) in items" :key="index"
        class="transition-all duration-500 ease-in-out w-full h-full flex-[0_0_70%] mx-2" :class="{
          'scale-110 z-10': index === activeIndex,
          'scale-90 opacity-70': index !== activeIndex
        }">
        <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover max-h-[300px] rounded-xl shadow-lg" />
      </div>
    </div>
  </div>
</template>
