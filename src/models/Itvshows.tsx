import genres from "./Igenres";

export default interface Itvshows {
  poster_path: string;
  backdrop_path: string;
  name: string;
  tagline?: string;
  original_title?: string;
  original_name: string;
  popularity: number;
  overview: string;
  id: number;
  genres: genres[];
}
