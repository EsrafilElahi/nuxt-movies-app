export const homeApi = {
  getMovies: async () => {
    const { $api } = useNuxtApp();

    const { data } = await useAsyncData(
      "movies",
      async () => {
        const response: any = await $api("/discover/movie", {
          params: {
            include_adult: false,
            include_video: false,
            language: "en-US",
            page: 1,
            sort_by: "popularity.desc",
          },
        });
        return response;
      },
      {
        transform: (data) => {
          return data.results.slice(0, 10);
        },
      }
    );

    return data;
  },

  getTrendMovies: async () => {
    const { $api } = useNuxtApp();
    return await $api("/trending/all/day", {
      params: {
        language: "en-US",
      },
    });
  },
};
