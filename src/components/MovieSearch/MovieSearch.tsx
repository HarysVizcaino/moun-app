import { Button, Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { IntContext } from '../../data-components/Internationalization';
import { MovieContext } from '../../data-components/movieDataComponent';
import { getGenre } from '../../lib/api';
import { genreModel } from '../../models/genre-model';
import styles from './MovieSearch.module.css';
export interface IMovieSearch {}

const MovieSearch: React.FC<IMovieSearch> = () => {
  const int = useContext(IntContext);
  const { actions } = useContext(MovieContext);

  const { addToQueryAction, getMoviesListAction } = actions;

  const [genreList, setGenreList] = useState<genreModel[]>([]);

  const { language } = int;
  const { homePage } = language;
  const { categories } = homePage;

  const getGenreList = async () => {
    const response = await getGenre(1, language.id);
    setGenreList(response.genres);
  };
  const popularityList = [
    {
      name: homePage.popularity.more,
      id: 'popularity.desc',
    },
    {
      name: homePage.popularity.less,
      id: 'popularity.asc',
    },
    {
      name: homePage.mostrecent,
      id: 'release_date.asc',
    },
    {
      name: homePage.oldestRelease,
      id: 'release_date.desc',
    },
  ];

  useEffect(() => {
    getGenreList();
  }, [language.id]);
  return (
    <Grid container direction="column" className={styles.movieSearchContainer}>
      <Grid container className={styles.searchButtonContainer}>
        <button
          className={` ${styles.searchButton} ${styles.searchButtonActive}`}
        >
          {categories.terror}
        </button>
        <button className={styles.searchButton}>{categories.heroes}</button>
        <button className={styles.searchButton}>{categories.family}</button>
      </Grid>
      <Grid className={styles.formSearch}>
        <Grid item marginBottom={5}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={genreList}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={homePage.genre} />
            )}
            onChange={(_event, genre) => {
              const key = genre ? String(genre.id) : '20';
              addToQueryAction('GENRER', key);
            }}
          />
        </Grid>
        <Grid item>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={popularityList}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label={homePage.sortBy} />
            )}
            onChange={(_event, order) => {
              const key = order ? String(order.id) : 'popularity.desc';
              addToQueryAction('ORDER', key);
            }}
          />
        </Grid>
      </Grid>
      <Grid item className={styles.buttonContent}>
        <Button
          size="large"
          variant="contained"
          className={styles.searchButtonLarge}
          onClick={() => {
            getMoviesListAction(language.id);
          }}
        >
          {homePage.searchButton}
        </Button>
      </Grid>
    </Grid>
  );
};

export default MovieSearch;
