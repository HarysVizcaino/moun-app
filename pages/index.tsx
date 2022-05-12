import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import HomeSearch from '../src/components/home/Search/HomeSearch';
import PrimaryLayout from '../src/components/layouts/primary/PrimaryLayout';
import MovieList from '../src/components/MovieList/MovieList';
import { IntContext } from '../src/data-components/Internationalization';
import { MovieContext } from '../src/data-components/movieDataComponent';
import { movieModel } from '../src/models/movie-model';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const [selectedGenre, setSelectedGenre] = useState();
  const [movies, setMovies] = useState<movieModel[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const int = useContext(IntContext);
  const movieContext = useContext(MovieContext);

  const { language } = int;
  const { actions, moviesList, totalPages } = movieContext;
  const { getTrendingMoviesAction, loadMoreMoviesAction } = actions;
  const { homePage } = language;

  const loadMoreItems = async () => {
    loadMoreMoviesAction(language.id);
  };

  useEffect(() => {
    getTrendingMoviesAction(pageNumber, language.id);
  }, [language.id]);

  return (
    <Grid container>
      <HomeSearch />
      <Grid item lg={12} sm={12} xs={12} className={styles.homeDivier}>
        <p>{homePage.listTitle}</p>
      </Grid>
      <Grid item lg={12} sm={12} xs={12} className={styles.movieContainerList}>
        <MovieList
          loading={loading}
          items={moviesList}
          loadMoreItems={loadMoreItems}
        />
      </Grid>
    </Grid>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
