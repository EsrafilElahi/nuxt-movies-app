export const filmIDApi = {
  getFilmID: async (filmID: any) => {
    const { $api } = useNuxtApp();
    return await $api(`/movie/${filmID}`, {
      params: {
        language: "en-US",
      },
    });
  },

  getSimilarFilmID: async (filmID: any) => {
    const { $api } = useNuxtApp();
    const response = await $api(`/movie/${filmID}/similar`, {
      params: {
        language: "en-US",
      },
    });

    return response?.results?.slice(0, 10);
  },
};
