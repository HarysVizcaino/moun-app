import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import PrimaryLayout from '../src/components/layouts/primary/PrimaryLayout';
import MovieList from '../src/components/MovieList/MovieList';
import SearchFilter from '../src/components/search/SearchFilter';
import { IntContext } from '../src/data-components/Internationalization';
import { getTrendingMovies } from '../src/lib/api';
import { genreModel } from '../src/models/genre-model';
import { movieModel } from '../src/models/movie-model';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Search: NextPageWithLayout = () => {
  const [totalPage, setTotalPage] = useState<number>(0);
  const [movies, setMovies] = useState<movieModel[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const int = useContext(IntContext);
  console.log({ int });

  const fetchData = async () => {
    const response = await getTrendingMovies(pageNumber);
    setMovies(response.results);
    setTotalPage(response.total_pages);
  };

  const loadMoreItems = async () => {
    console.log('LoadMore');
    if (pageNumber < totalPage) {
      setLoading(true);
      const response = await getTrendingMovies(pageNumber + 1);
      const list = [...movies, ...response.results];
      setMovies(list);
      setPageNumber((n) => n + 1);
      setLoading(false);
    }
  };

  const fetchByGenre = async (genre: genreModel) => {
    console.log('THE', genre);
    setMovies([]);
    setLoading(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container>
      <SearchFilter fetchByGender={fetchByGenre} />
      <Grid item lg={12} className={styles.homeDivier}>
        <p>Descubre los ultimos extrenos</p>
      </Grid>
      <Grid item lg={12} className={styles.movieContainerList}>
        <MovieList
          loading={loading}
          items={movies}
          loadMoreItems={loadMoreItems}
        />
      </Grid>
    </Grid>
  );
};

Search.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Search;
