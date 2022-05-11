export interface IMovieSearch {}
import { Button, Grid, Rating, Typography } from '@mui/material';
import styles from './MovieSearch.module.css';

const MovieSearch: React.FC<IMovieSearch> = () => {
  return (
    <Grid container direction="column" className={styles.movieSearchContainer}>
      <Grid container className={styles.searchButtonContainer}>
        <button
          className={` ${styles.searchButton} ${styles.searchButtonActive}`}
        >
          TERROR
        </button>
        <button className={styles.searchButton}>HEROES</button>
        <button className={styles.searchButton}>FAMILIA</button>
      </Grid>
      <Grid item className={styles.formSearch}>
        <Grid>
          <Typography component="legend">Buscar por Rating</Typography>
          <Rating
            name="simple-controlled"
            value={4}
            onChange={(event, newValue) => {
              console.log({ event, newValue });
            }}
          />
        </Grid>
        {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="With sx" variant="standard" />
        </Box> */}
      </Grid>
      <Grid item className={styles.buttonContent}>
        <Button
          size="large"
          variant="contained"
          className={styles.searchButtonLarge}
        >
          Encontrar mi pelicula
        </Button>
      </Grid>
    </Grid>
  );
};

export default MovieSearch;
