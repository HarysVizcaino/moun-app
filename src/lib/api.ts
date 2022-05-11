import { apiResponse } from '../models/apiResponse-mode';
import { genreModel } from '../models/genre-model';
import { movieModel } from '../models/movie-model';

function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export const getTrendingMovies = async (
  page: number = 1,
  language: string
): Promise<apiResponse<movieModel>> => {
  const data = await api<apiResponse<movieModel>>(
    `${process.env.NEXT_PUBLIC_API_URL}/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&include_video=true&page=${page}&language=${language}`
  );
  return data;
};

export const getGenre = async (page: number, language: string) => {
  const data = await api<{ genres: genreModel[] }>(
    `${process.env.NEXT_PUBLIC_API_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=${language}`
  );
  return data;
};

//https://api.themoviedb.org/3/discover/movie?api_key=8fdad314cbfe864ca63c833751ae99a0
export const getMovies = async (
  page: number,
  language: string,
  queryString: string
) => {
  const movies = await api<apiResponse<movieModel>>(
    `${process.env.NEXT_PUBLIC_API_URL}/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}${queryString}&language=${language}&page=${page}`
  );
  console.log({ movies });
  return movies;
};
