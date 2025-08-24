import { useQuery } from "@tanstack/vue-query";
import { filmIDApi } from "./filmIDApi";

export const useGetFilmID = (filmID: any) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["filmID", filmID],
    queryFn: () => filmIDApi.getFilmID(filmID),
    enabled: !!filmID,
  });

  if (isError.value) {
    throw createError({
      statusCode: 500,
      message: error.value?.message || "Server error",
      fatal: false,
    });
  }
  return { data, isLoading, isError, error };
};

export const useGetSimilarFilmID = (filmID: any) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["similarFilmID", filmID],
    queryFn: () => filmIDApi.getSimilarFilmID(filmID),
    enabled: !!filmID,
  });

  if (isError.value) {
    throw createError({
      statusCode: 500,
      message: error.value?.message || "Server error",
      fatal: false,
    });
  }
  return { data, isLoading, isError, error };
};
