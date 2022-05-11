import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import HomeSearch from '../src/components/home/Search/HomeSearch';
import PrimaryLayout from '../src/components/layouts/primary/PrimaryLayout';
import MovieList from '../src/components/MovieList/MovieList';
import { IntContext } from '../src/data-components/Internationalization';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const int = useContext(IntContext);
  const { language, handleLanguage } = int;
  console.log({ int });
  return (
    <Grid container>
      <HomeSearch />
      <Grid item lg={12} className={styles.homeDivier}>
        <p>Descubre los ultimos extrenos</p>
      </Grid>
      <Grid item lg={12} className={styles.movieContainerList}>
        <MovieList />
      </Grid>
    </Grid>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
