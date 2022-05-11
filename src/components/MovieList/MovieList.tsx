import { Grid } from '@mui/material';
import { movieModel } from '../../models/movie-model';
import MovieCard from '../cards/movie/MovieCard';
import styles from './MovieList.module.css';

export interface IMovieList {
  items?: movieModel[];
}

const MovieList: React.FC<IMovieList> = ({ items }) => {
  return (
    <Grid container>
      <>
        {items &&
          items.map(() => (
            <Grid item lg={3} className={styles.gredItemContainer}>
              <MovieCard />
            </Grid>
          ))}
      </>
    </Grid>
  );
};

export default MovieList;
