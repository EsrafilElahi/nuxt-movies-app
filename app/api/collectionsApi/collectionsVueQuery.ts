import { useQuery } from "@tanstack/vue-query";
import { collectionsApi } from "./collectionsApi";

export const useGetAllCollections = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allCollections"],
    queryFn: collectionsApi.getAllCollections,
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

export const useGetCollectionID = (collectionID: any) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["collectionID", collectionID],
    queryFn: () => collectionsApi.getCollectionID(collectionID),
    enabled: !!collectionID,
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
