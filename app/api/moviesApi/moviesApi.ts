export const moviesApi = {
  getAllMovies: async () => {
    const { $api } = useNuxtApp();
    return await $api("/movie/popular", {
      params: {
        language: "en-US",
        page: "1",
      },
    });
  },
};
