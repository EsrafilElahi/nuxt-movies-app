export const getMovies = async () => {
  const { $api } = useNuxtApp();

  const response = await $api(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return response;
};
