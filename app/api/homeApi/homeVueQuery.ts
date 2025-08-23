import { useQuery } from "@tanstack/vue-query";
import { homeApi } from "./homeApi";

export const useGetMovies = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: homeApi.getMovies,
  });

  if (isError.value) {
    throw createError({
      statusCode: 500,
      message: error.value?.message || "Server error",
      fatal: false,
    });
  }
  return { isLoading, isError, data, error };
};

export const useGetTrendMovies = () => {

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["trendMovies"],
    queryFn: homeApi.getTrendMovies,
  });

  if (isError.value) {
    throw createError({
      statusCode: 500,
      message: error.value?.message || "Server error",
      fatal: false,
    });
  }
  return { isLoading, isError, data, error };
};
