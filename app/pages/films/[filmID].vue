<script setup>
import { useGetFilmID, useGetSimilarFilmID } from '~/api/filmIDApi/filmIDVueQuery';
const route = useRoute();
const filmID = route?.params?.filmID

const { data: dataFilmID } = useGetFilmID(filmID)
const { data: dataSimilarFilmID } = useGetSimilarFilmID(filmID)

</script>

<template>
  <div>
    <FilmIDHeroSection :dataFilmID="dataFilmID" />
    <FilmIDTextInfo :dataFilmID="dataFilmID" />

    <Slider :title="'suggestion like ' + dataFilmID?.title" :seeMoreUrl="'/movies'" :data="dataSimilarFilmID" />
  </div>
</template>
