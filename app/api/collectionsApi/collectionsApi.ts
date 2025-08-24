export const collectionsApi = {
  getAllCollections: async () => {
    const { $api } = useNuxtApp();
    return await $api("/search/collection", {
      params: {
        query: "friends",
        include_adult: true,
        language: "en-US",
        page: "1",
      },
    });
  },
};
