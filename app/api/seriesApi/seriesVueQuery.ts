import { useQuery } from "@tanstack/vue-query";
import { seriesApi } from "./seriesApi";

export const useGetAllSeries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allSeries"],
    queryFn: seriesApi.getAllSeries,
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
