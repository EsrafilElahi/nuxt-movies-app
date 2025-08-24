export const filmIDApi = {
  getFilmID: async (filmID: any) => {
    const { $api } = useNuxtApp();

    try {
      return await $api(`/movie/${filmID}`, {
        params: {
          language: "en-US",
        },
      });
    } catch (error) {
      return await $api(`/tv/${filmID}`, {
        params: {
          language: "en-US",
        },
      });
    }
  },

  getSimilarFilmID: async (filmID: any) => {
    const { $api } = useNuxtApp();

    try {
      const movieResponse = await $api(`/movie/${filmID}/similar`, {
        params: { language: "en-US" },
      });

      if (movieResponse?.results?.length > 0) {
        return movieResponse.results.slice(0, 10);
      }
    } catch (error) {
      const tvResponse = await $api(`/tv/${filmID}/similar`, {
        params: { language: "en-US" },
      });

      return tvResponse?.results?.slice(0, 10) || [];
    }
  },
};
