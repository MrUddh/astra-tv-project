import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { tvMazeApi } from "../services/tvMazeApi";

const SERIES_CACHE_KEY = "series";
const SINGLE_SERIE_CACHE_KEY = "singel-series";

export const useGetSeries = (query: string) => {
  return useQuery({
    queryKey: [SERIES_CACHE_KEY, query],
    queryFn: () => tvMazeApi.getSearchSeries(query),
    enabled: query !== "",
    onError: (error: Error) => {
      //TODO: Implement logging to a service. eg. "Sentry".
      console.error("Error fetching series:", error);
    },
    staleTime: 1000 * 60 * 10,
  } as UseQueryOptions);
};

export const useGetSingleSerie = (query: string) => {
  return useQuery({
    queryKey: [SINGLE_SERIE_CACHE_KEY, query],
    queryFn: () => tvMazeApi.getSingleSerie(query),
    enabled: query !== "",
    onError: (error: Error) => {
      //TODO: Implement logging to a service. eg. "Sentry".
      console.error("Error fetching single series:", error);
    },
    staleTime: 1000 * 60 * 10,
  } as UseQueryOptions);
};
