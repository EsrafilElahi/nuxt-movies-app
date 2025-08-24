import { defineStore } from "pinia";

export const useSearchDataStore = defineStore("searchData", {
  state: () => {
    const obj = {
      searchData: null,
      searchDataIsLoading: false,
    };

    return obj;
  },

  getters: {
    getSearchData: (state) => {
      return state.searchData;
    },

    getSearchDataIsLoading: (state) => {
      return state.searchDataIsLoading;
    },
  },

  actions: {
    setSearchData(newData: any) {
      return (this.searchData = newData);
    },

    setSearchDataIsLoading(newIsLoading: any) {
      return (this.searchDataIsLoading = newIsLoading);
    },
  },
});
