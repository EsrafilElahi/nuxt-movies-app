export const seriesApi = {
  getAllSeries: async () => {
    const { $api } = useNuxtApp();
    return await $api("/tv/popular", {
      params: {
        language: "en-US",
        page: "1",
      },
    });
  },
};
