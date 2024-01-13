import { useQuery } from "@tanstack/react-query";
import { tvMazeApi } from "../services/tvMazeApi";

const SERIES_CACHE_KEY = "series";
const SINGLE_SERIE_CACHE_KEY = "singel-series";

export const useGetSeries = (query: string) => {
  return useQuery({
    queryKey: [SERIES_CACHE_KEY, query],
    queryFn: () => tvMazeApi.getSearchSeries(query),
    enabled: query !== "",
  });
};

export const useGetSingleSerie = (query: string) => {
  return useQuery({
    queryKey: [SINGLE_SERIE_CACHE_KEY, query],
    queryFn: () => tvMazeApi.getSingleSerie(query),
    enabled: query !== "",
  });
};
