import { Grid } from '@mui/material';
import Image from 'next/image';
import doctor from '../../../../public/doctor_strange_scott_derrickson.jpg';
import MovieSearch from '../../MovieSearch/MovieSearch';
import styles from './HomeSearch.module.css';
export interface IHomeSearch {}

const HomeSearch: React.FC<IHomeSearch> = () => {
  return (
    <Grid container>
      <Grid item lg={6}>
        <Grid className={styles.searchSectionContainer}>
          <p className={styles.movieSearchMainText}>
            Encuentra la pelicula para ver en familia
          </p>
        </Grid>
        <Grid className={styles.movieSearchContainer}>
          <MovieSearch />
        </Grid>
      </Grid>
      <Grid item lg={6}>
        <span className={styles.searchSectionContainer}>
          <Image src={doctor} />
        </span>
      </Grid>
    </Grid>
  );
};

export default HomeSearch;
