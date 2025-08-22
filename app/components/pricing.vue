<script setup>
const pricingRef = useTemplateRef('pricing');

const handleScrollToRef = () => {
  if (pricingRef.value) {
    pricingRef.value.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }
};


defineExpose({
  pricingRef,
  handleScrollToRef
})

</script>

<template>
  <div>
    <div ref="pricing">
      pricing
    </div>
  </div>
</template>
