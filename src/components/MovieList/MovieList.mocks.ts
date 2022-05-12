import { IMovieList } from './MovieList';

const base: IMovieList = {
  loading: false,
  loadMoreItems: () => {},
};

export const mockMovieListProps = {
  base,
};
