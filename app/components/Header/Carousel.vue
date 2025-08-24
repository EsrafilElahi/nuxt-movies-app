<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import EmblaCarousel from 'embla-carousel'
import { tmdbImage } from '~/lib/tmdbImage'
import AutoScroll from 'embla-carousel-auto-scroll'

const emit = defineEmits(['handleActiveItem'])

const props = defineProps({
  items: { type: Array, required: true },
  options: { type: Object, default: () => (AutoScroll({ loop: false })) },
  autoScroll: { type: Object, default: () => ({ speed: 4, playOnInit: true }) }
})

const emblaNode = ref(null)
const emblaApi = ref(null)
const activeIndex = ref(0)

watch(activeIndex, (newIndex) => {
  emit('handleActiveItem', props.items[newIndex])
})

onMounted(() => {
  emblaApi.value = EmblaCarousel(emblaNode.value, props.options, [])

  // وقتی انتخاب تغییر کرد
  emblaApi.value.on('select', () => {
    activeIndex.value = emblaApi.value.selectedScrollSnap()
  })

  // مقدار اولیه
  activeIndex.value = emblaApi.value.selectedScrollSnap()
  emit('handleActiveItem', props.items[activeIndex.value])
})

onUnmounted(() => {
  emblaApi.value?.destroy()
})
</script>

<template>
  <div class="overflow-hidden w-[450px] max-h-[350px] p-4" ref="emblaNode">
    <div class="flex max-h-[300px] h-full">
      <div v-for="(item, index) in items" :key="index"
        class="transition-all duration-500 ease-in-out w-full h-full flex-[0_0_70%] mx-2" :class="{
          'scale-110 z-10': index === activeIndex,
          'scale-90 opacity-70': index !== activeIndex
        }">
        <NuxtImg :src="`${tmdbImage.backdrop(item.backdrop_path, 'w780')}`" :alt="item.title"
          class="w-full h-full object-cover max-h-[300px] rounded-xl shadow-lg" />
      </div>
    </div>
  </div>
</template>
