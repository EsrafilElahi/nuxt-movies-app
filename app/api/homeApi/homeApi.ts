export const homeApi = {
  getHeroSectionMovies: async () => {
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
    const response = await $api("/trending/all/day", {
      params: {
        language: "en-US",
      },
    });

    return response?.results?.slice(0, 10);
  },

  getMovies: async () => {
    const { $api } = useNuxtApp();
    const response = await $api("/trending/movie/day", {
      params: {
        language: "en-US",
      },
    });

    return response?.results?.slice(0, 10);
  },

  getSeries: async () => {
    const { $api } = useNuxtApp();
    const response = await $api("/trending/tv/day", {
      params: {
        language: "en-US",
      },
    });

    return response?.results?.slice(0, 10);
  },

  getCollections: async () => {
    const { $api } = useNuxtApp();
    const response = await $api("/search/collection", {
      params: {
        query: "friends",
        include_adult: true,
        language: "en-US",
        page: "1",
      },
    });

    return response?.results?.slice(0, 10);
  },
};
