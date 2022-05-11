import { Grid } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import styles from './SearchFilter.module.css';

export interface ISearchFilter {}

const SearchFilter: React.FC<ISearchFilter> = () => {
  return (
    <Grid container className={styles.searchContainer}>
      <Grid item lg={12}>
        <Grid>
          <p>Opciones de Filtro</p>
        </Grid>
        <Grid container spacing={5}>
          <Grid item lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Autor</InputLabel>
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
              <InputLabel id="demo-simple-select-label">Año</InputLabel>
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
