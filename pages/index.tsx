import { Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import HomeSearch from '../src/components/home/Search/HomeSearch';
import PrimaryLayout from '../src/components/layouts/primary/PrimaryLayout';
import MovieList from '../src/components/MovieList/MovieList';
import { IntContext } from '../src/data-components/Internationalization';
import { getTrendingMovies } from '../src/lib/api';
import { movieModel } from '../src/models/movie-model';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const [totalPage, setTotalPage] = useState<number>();
  const [movies, setMovies] = useState<movieModel[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const int = useContext(IntContext);
  const { language, handleLanguage } = int;
  console.log({ int });

  const fetchData = async () => {
    const response = await getTrendingMovies(pageNumber);
    setMovies(response.results);
    setTotalPage(response.total_pages);
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber]);

  console.log(totalPage);
  return (
    <Grid container>
      <HomeSearch />
      <Grid item lg={12} className={styles.homeDivier}>
        <p>Descubre los ultimos extrenos</p>
      </Grid>
      <Grid item lg={12} className={styles.movieContainerList}>
        <MovieList items={movies} />
      </Grid>
    </Grid>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
