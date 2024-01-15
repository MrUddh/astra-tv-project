export interface TVMazeApiResponse {
  score: number;
  show: Show;
}

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network | null;
  webChannel: WebChannel | null;
  dvdCountry: null;
  externals: Externals;
  image: Image;
  summary: string | null;
  updated: number;
  _links: Links;
}

interface Schedule {
  time: string;
  days: string[];
}

interface Rating {
  average: number | null;
}

interface Network {
  id: number;
  name: string;
  country: Country;
  officialSite: string | null;
}

interface WebChannel {
  id: number;
  name: string;
  country: null;
  officialSite: string;
}

interface Country {
  name: string;
  code: string;
  timezone: string;
}

interface Externals {
  tvrage: number | null;
  thetvdb: number | null;
  imdb: string | null;
}

interface Image {
  medium: string;
  original: string;
}

interface Links {
  self: Href;
  previousepisode?: Href;
}

interface Href {
  href: string;
}

export type TVMazeApiArrayResponse = TVMazeApiResponse[];
export type SingleSerieResponse = Show | null;

export type TvMazeApi = {
  getSearchSeries: (query: string) => Promise<TVMazeApiArrayResponse>;
  getSingleSerie: (query: string) => Promise<SingleSerieResponse>;
};
