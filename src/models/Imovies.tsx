import genres from "./Igenres";

export default interface Imovies {
  poster_path: string;
  backdrop_path: string;
  original_title: string;
  tagline: string;
  name?: string;
  original_name?: string;
  popularity: number;
  overview: string;
  id: number;
  genres: genres[];
}
