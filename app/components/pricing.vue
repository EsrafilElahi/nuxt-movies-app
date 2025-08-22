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
  <div ref="pricing" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-[48px] mb-10">
    <VCard class="!bg-background dark:!bg-secondary-tint-100 w-full">
      <template v-slot:title>
        <div class="flex flex-col items-center gap-1 text-primary">
          <span class="title-3 text-primary">Basic</span>
          <span class="body-normal text-primary">3month</span>
        </div>
      </template>

      <VCardText class="flex flex-col gap-8 mt-5 pt-5 border-t border-dashed !border-white dark:!border-primary">
        <div class="flex flex-col items-center">
          <span class="title-3 text-primary">$150.65</span>
          <span class="body-light mt-1 !text-white dark:!text-black">Cancel anytime</span>
        </div>

        <VBtn size="small">
          <template #default>
            <span class="flex items-center text-white pb-1">
              <Icon name="custom:shopping" class="mt-[1px] mr-1 text-white" />
              Continue
            </span>
          </template>
        </VBtn>

      </VCardText>
    </VCard>

    <VCard class="!bg-primary w-full">
      <template v-slot:title>
        <div class="flex flex-col items-center gap-1">
          <span class="title-3 text-secondary">Suggested</span>
          <span class="body-normal text-secondary">6month</span>
        </div>
      </template>

      <VCardText class="flex flex-col gap-8 mt-5 pt-5 border-t border-dashed !border-background">
        <div class="flex flex-col items-center">
          <span class="title-3 text-secondary">$22.180</span>
          <span class="body-light mt-1 !text-black">Cancel anytime</span>
        </div>

        <VBtn size="small" color="white">
          <template #default>
            <span class="flex items-center text-primary pb-1">
              <Icon name="custom:shopping" class="mt-[1px] mr-1 text-primary" />
              Continue
            </span>
          </template>
        </VBtn>

      </VCardText>
    </VCard>

    <VCard class="!bg-background dark:!bg-secondary-tint-100 w-full">
      <template v-slot:title>
        <div class="flex flex-col items-center gap-1 text-primary">
          <span class="title-3 text-primary">Premium</span>
          <span class="body-normal text-primary">12month</span>
        </div>
      </template>

      <VCardText class="flex flex-col gap-8 mt-5 pt-5 border-t border-dashed !border-white dark:!border-primary">
        <div class="flex flex-col items-center">
          <span class="title-3 text-primary">$150.65</span>
          <span class="body-light mt-1 !text-white dark:!text-black">Cancel anytime</span>
        </div>

        <VBtn size="small">
          <template #default>
            <span class="flex items-center text-white pb-1">
              <Icon name="custom:shopping" class="mt-[1px] mr-1 text-white" />
              Continue
            </span>
          </template>
        </VBtn>

      </VCardText>
    </VCard>
  </div>
</template>
