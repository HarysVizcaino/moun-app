import { Grid } from '@mui/material';
import MovieCard from '../cards/movie/MovieCard';
import styles from './MovieList.module.css';

export interface IMovieList {}

const item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const MovieList: React.FC<IMovieList> = () => {
  return (
    <Grid container>
      {item.map(() => (
        <Grid item lg={3} className={styles.gredItemContainer}>
          <MovieCard />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
