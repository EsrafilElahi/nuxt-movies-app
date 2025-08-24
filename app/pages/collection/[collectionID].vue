<script setup>
import { useGetCollectionID } from '~/api/collectionsApi/collectionsVueQuery';

const route = useRoute();
const collectionID = route?.params?.collectionID

const { data: dataCollectionID, isLoading } = useGetCollectionID(collectionID)

</script>

<template>
  <div>
    <CollectionIDHeroSection :dataCollectionID="dataCollectionID" />

    <div class="my-10 px-[48px]">
      <div v-if="isLoading" class="text-center">isLoading...</div>

      <div v-else class="grid grid-cols-3 gap-10">
        <div v-for="item in dataCollectionID?.parts" :key="item.id">
          <FilmItem :item="item" :class="'w-[450px] h-[500px]'" />
        </div>
      </div>
    </div>
  </div>
</template>
