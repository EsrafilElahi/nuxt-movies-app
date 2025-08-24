import { useQuery } from "@tanstack/vue-query";
import { homeApi } from "./homeApi";

export const useGetHeroSectionMovies = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["HeroSectionMovies"],
    queryFn: homeApi.getHeroSectionMovies,
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

export const useGetTrendMovies = () => {
  const { data, isLoading, isError, error } = useQuery({
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
  return { data, isLoading, isError, error };
};

export const useGetMovies = () => {
  const { data, isLoading, isError, error } = useQuery({
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
  return { data, isLoading, isError, error };
};

export const useGetSeries = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["series"],
    queryFn: homeApi.getSeries,
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

export const useGetCollections = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["collections"],
    queryFn: homeApi.getCollections,
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
