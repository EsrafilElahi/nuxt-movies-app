import { ofetch } from "ofetch";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const token = config.public.token;

  const api = ofetch.create({
    baseURL: config.public.apiBaseUrl,

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    onRequest({ request }) {
      if (process.server) {
        // console.log("🚀 Server-side request:", request);
      }
    },
    onResponse: (error) => {
      // console.log("error response :", error);
    },
    onRequestError: (requestError) => {
      // console.log("requestError :", requestError);
    },
    onResponseError: (responseError) => {
      return Promise.reject(responseError);

      // if (responseError.response.status === 401) {
      //   showError("لطفا مجدد وارد شوید!");
      //   navigateTo("/login");
      // } else {
      //   throw createError({
      //     statusCode: responseError.response?.status || 500,
      //     message:
      //       responseError.response?._data?.status_message || "Server error",
      //     fatal: false,
      //   });
      // }
    },
  });

  return {
    provide: {
      api: api,
    },
  };
});
