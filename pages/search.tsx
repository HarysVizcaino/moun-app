import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import PrimaryLayout from '../src/components/layouts/primary/PrimaryLayout';
import MovieList from '../src/components/MovieList/MovieList';
import SearchFilter from '../src/components/search/SearchFilter';
import { IntContext } from '../src/data-components/Internationalization';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './page';

const Search: NextPageWithLayout = () => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  const int = useContext(IntContext);
  const { language, handleLanguage } = int;
  console.log({ int });
  return (
    <Grid container>
      <SearchFilter />
      <Grid item lg={12} className={styles.homeDivier}>
        <p>Descubre los ultimos extrenos</p>
      </Grid>
      <Grid item lg={12} className={styles.movieContainerList}>
        <MovieList />
      </Grid>
    </Grid>
  );
};

Search.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export default Search;
