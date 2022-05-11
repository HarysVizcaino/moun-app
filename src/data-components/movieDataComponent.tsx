import React, { ReactElement, useState } from 'react';
import { getMovies, getTrendingMovies } from '../lib/api';
import { movieModel } from '../models/movie-model';

export interface IMovieComponent {
  children: ReactElement;
}

export interface IMovieContext {
  moviesList: movieModel[] | [];
  totalPages: number;
  actions: {
    getTrendingMoviesAction: (page: number, language: string) => Promise<void>;
    loadMoreMoviesAction: (language: string) => Promise<void>;
    addToQueryAction: (key: string, value: string) => void;
    getMoviesListAction: (language: string) => void;
  };
}

const initialValue: IMovieContext = {
  moviesList: [],
  totalPages: 0,
  actions: {
    getTrendingMoviesAction: async (page: number, language: string) => {},
    loadMoreMoviesAction: async (language: string) => {},
    addToQueryAction: (key: string, value: string) => {},
    getMoviesListAction: (language: string) => {},
  },
};

export const MovieContext = React.createContext<IMovieContext>(initialValue);

const MovieDataComponent: React.FC<IMovieComponent> = ({ children }) => {
  const [moviesList, setMovieliST] = useState<movieModel[] | []>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [actualPage, setActualPage] = useState<number>(1);
  const [moviePag, setMoviePag] = useState<number>(1);
  const [query, setQuery] = useState<string>('');
  const [activeLanguage, setActiveLanguage] = useState<string>('');

  const getTrendingMoviesAction = async (page: number, language: string) => {
    if (query) {
      return getMoviesListAction(activeLanguage);
    }
    const response = await getTrendingMovies(page, language);
    setMovieliST(response.results);
    setTotalPages(response.total_pages);
  };

  const getMoviesListAction = async (language: string) => {
    console.log('THEQUERY', query);
    if (query) {
      if (moviePag < totalPages) {
        const movies = await getMovies(moviePag, language, query);
        console.log(movies.results);
        setMovieliST(movies.results);
        setTotalPages(movies.total_pages);
        setActiveLanguage(language);
        setMoviePag((n) => n + 1);
      }
    }
  };

  const loadMoreMoviesAction = async (language: string) => {
    let list;
    let total: number;
    if (actualPage < totalPages) {
      if (query) {
        const movies = await getMovies(moviePag, language, query);
        list = [...moviesList, ...movies.results];
        total = movies.total_pages;
      } else {
        const response = await getTrendingMovies(actualPage, language);
        total = response.total_pages;
        list = [...moviesList, ...response.results];
      }
      setMovieliST(list);
      setTotalPages(total);
      setActualPage((n) => n + 1);
    }
  };

  const addToQueryAction = (key: string, value: string) => {
    let buildQuery = '';
    if (key === 'GENRER') {
      buildQuery = `${query}&with_genres=${value}`;
    } else if (key === 'ORDER') {
      buildQuery = `${query}&sort_by=${value}`;
    }
    console.log(buildQuery);
    setQuery(buildQuery);
  };

  return (
    <>
      <MovieContext.Provider
        value={{
          moviesList,
          totalPages,
          actions: {
            getTrendingMoviesAction,
            loadMoreMoviesAction,
            addToQueryAction,
            getMoviesListAction,
          },
        }}
      >
        {children}
      </MovieContext.Provider>
    </>
  );
};

export default MovieDataComponent;
