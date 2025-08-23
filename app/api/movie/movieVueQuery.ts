import { useQuery } from "@tanstack/vue-query";
import { getMovies } from "./movieApi";

export const useGetMovies = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getMovies,
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
