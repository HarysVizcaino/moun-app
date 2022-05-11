import { apiResponse } from '../models/apiResponse-mode';
import { movieModel } from '../models/movie-model';

function api<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json<T>();
  });
}

export const getTrendingMovies = async (
  page: number = 1
): Promise<apiResponse<movieModel>> => {
  const data = await api<apiResponse<movieModel>>(
    `${process.env.NEXT_PUBLIC_API_URL}/trending/all/day?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`
  );
  return data;
};
