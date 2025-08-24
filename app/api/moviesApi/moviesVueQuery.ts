import { useQuery } from "@tanstack/vue-query";
import { moviesApi } from "./moviesApi";

export const useGetAllMovies = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allMovies"],
    queryFn: moviesApi.getAllMovies,
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
