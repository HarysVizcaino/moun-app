import { Grid } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import React, { useContext, useEffect, useState } from 'react';
import { IntContext } from '../../data-components/Internationalization';
import { getGenre } from '../../lib/api';
import { genreModel } from '../../models/genre-model';
import styles from './SearchFilter.module.css';

export interface ISearchFilter {
  fetchByGender: (item: genreModel) => void;
}

const SearchFilter: React.FC<ISearchFilter> = ({ fetchByGender }) => {
  const int = useContext(IntContext);
  const { language } = int;
  const [genreList, setGenreList] = useState<genreModel[]>([]);
  const getGenreList = async () => {
    const response = await getGenre(1, language.id);
    setGenreList(response.genres);
  };

  useEffect(() => {
    getGenreList();
  }, []);

  return (
    <Grid container className={styles.searchContainer}>
      <Grid item lg={12}>
        <Grid>
          <p>Opciones de Filtro</p>
        </Grid>
        <Grid container spacing={5}>
          <Grid item lg={4}>
            <FormControl fullWidth>
              {genreList.length && (
                <Autocomplete
                  disablePortal
                  id="combo-box-demo"
                  options={genreList}
                  getOptionLabel={(option) => option.name}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Genero" />
                  )}
                  onChange={(_event, genre) => {
                    const genreData = genre
                      ? genre
                      : { id: 28, name: 'action' };
                    fetchByGender(genreData);
                  }}
                />
              )}
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pais</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={5}
                label="Age"
                onChange={(item) => {
                  console.log({ item });
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gategoria</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={5}
                label="Age"
                onChange={(item) => {
                  console.log({ item });
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SearchFilter;
