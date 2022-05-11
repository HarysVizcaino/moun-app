import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Image from 'next/image';
import React from 'react';
import { movieModel } from '../../models/movie-model';
import styles from './MovieDetailModal.module.css';

export interface IMovieDetailModal {
  isOpen: boolean;
  handleClose: () => void;
  movie: movieModel;
}

const MovieDetailModal: React.FC<IMovieDetailModal> = ({
  isOpen,
  handleClose,
  movie,
}) => {
  const {
    name,
    title,
    poster_path,
    overview,
    release_date,
    original_language,
  } = movie;
  return (
    <div>
      <Dialog
        open={isOpen}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className={styles.movieTitle}>
          {name ? name : title}
        </DialogTitle>
        <DialogContent>
          <Grid>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}w500/${poster_path}`}
              width={550}
              height={300}
              className={styles.imageDisplay}
            />
          </Grid>
          <Grid container>
            <Grid className={styles.descriptionContainer}>
              <DialogContentText id="alert-dialog-slide-description">
                {overview}
              </DialogContentText>
            </Grid>
            <Grid item>
              <Grid
                className={styles.dataInfo}
              >{`Release date: ${release_date}`}</Grid>
              <Grid
                className={styles.dataInfo}
              >{`Original language: ${original_language}`}</Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button className={styles.buttonClose} onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MovieDetailModal;
