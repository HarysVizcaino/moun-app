export interface movieModel {
  id: number;
  name?: string;
  vote_average: number;
  overview: string;
  release_date: string;
  vote_count: number;
  adult: boolean;
  backdrop_path: string;
  video: boolean;
  genre_ids: number[];
  title: string;
  original_language: string;
  original_title: string;
  poster_path: string;
  popularity: number;
  media_type: string;
}
