import {
  SingleSerieResponse,
  TVMazeApiArrayResponse,
  TvMazeApi,
} from "../types";
const BASE_URL = "https://api.tvmaze.com";

let controller: AbortController | undefined;

export const tvMazeApi: TvMazeApi = {
  getSearchSeries: async (query: string): Promise<TVMazeApiArrayResponse> => {
    if (!query) {
      throw new Error("Query must be provided");
    }
    if (controller) {
      controller.abort();
    }

    controller = new AbortController();
    try {
      const response = await fetch(`${BASE_URL}/search/shows?q=${query}`, {
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const shows = await response.json();
      return shows;
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        console.log("Fetch request cancelled");
      } else {
        console.error(error);
        throw error;
      }
      return [];
    }
  },

  getSingleSerie: async (query: string): Promise<SingleSerieResponse> => {
    if (!query) {
      throw new Error("Query-id must be provided");
    }
    if (controller) {
      controller.abort();
    }

    controller = new AbortController();
    try {
      const response = await fetch(`${BASE_URL}/shows/${query}`, {
        signal: controller.signal,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const show = await response.json();
      return show;
    } catch (error) {
      if ((error as Error).name === "AbortError") {
        console.log("Fetch request cancelled");
      } else {
        console.error(error);
        throw error;
      }
      return null;
    }
  },
};
