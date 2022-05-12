import { Grid } from '@mui/material';
import Image from 'next/image';
import React, { useContext } from 'react';
import doctor from '../../../../public/doctor_strange_scott_derrickson.jpg';
import { IntContext } from '../../../data-components/Internationalization';
import MovieSearch from '../../MovieSearch/MovieSearch';
import styles from './HomeSearch.module.css';
export interface IHomeSearch {}

const HomeSearch: React.FC<IHomeSearch> = () => {
  const int = useContext(IntContext);
  const { language } = int;
  const { homePage } = language;
  return (
    <Grid container>
      <Grid item lg={6} sm={12}>
        <Grid className={styles.searchSectionContainer}>
          <p className={styles.movieSearchMainText}>{homePage.main}</p>
        </Grid>
        <Grid className={styles.movieSearchContainer}>
          <MovieSearch />
        </Grid>
      </Grid>
      <Grid item lg={6} sm={12}>
        <span className={styles.searchSectionContainer}>
          <Image src={doctor} />
        </span>
      </Grid>
    </Grid>
  );
};

export default HomeSearch;
