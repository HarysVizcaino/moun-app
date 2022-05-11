import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { movieModel } from '../../models/movie-model';
import MovieCard from '../cards/movie/MovieCard';
import MovieDetailModal from '../MovieDetailModal/MovieDetailModal';
import styles from './MovieList.module.css';

export interface IMovieList {
  items?: movieModel[];
  loadMoreItems: () => void;
  loading: boolean;
}

const MovieList: React.FC<IMovieList> = ({ items, loadMoreItems, loading }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<movieModel>();
  console.log({ openModal });
  const handleViewClic = (item: movieModel) => {
    setOpenModal(true);
    setSelectedMovie(item);
    console.log('CLICKED', item);
  };
  return (
    <>
      {selectedMovie && (
        <MovieDetailModal
          isOpen={openModal}
          handleClose={() => {
            setOpenModal(false);
          }}
          movie={selectedMovie}
        />
      )}
      <InfiniteScroll pageStart={0} loadMore={loadMoreItems} hasMore={true}>
        <Grid container>
          <Grid container>
            {items &&
              items.map((item) => (
                <Grid item lg={3} className={styles.gredItemContainer}>
                  <MovieCard
                    item={item}
                    key={item.id}
                    learnMoreAction={handleViewClic}
                  />
                </Grid>
              ))}
          </Grid>
          <Grid lg={12} justifyContent="center">
            <Box sx={{ width: '100%' }}>{loading && <LinearProgress />}</Box>
          </Grid>
        </Grid>
      </InfiniteScroll>
    </>
  );
};

export default MovieList;
