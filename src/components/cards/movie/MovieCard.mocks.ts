import { movieModel } from '../../../models/movie-model';
import { IMovieCard } from './MovieCard';

const base: IMovieCard = {
  learnMoreAction: (item: movieModel) => {
    console.log(item);
  },
  item: {
    adult: false,
    backdrop_path: '/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg',
    genre_ids: [14, 28, 12],
    id: 453395,
    original_language: 'en',
    original_title: 'Doctor Strange in the Multiverse of Madness',
    overview:
      'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
    popularity: 5007.839,
    poster_path: '/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg',
    release_date: '2022-05-04',
    title: 'Doctor Strange in the Multiverse of Madness',
    video: false,
    vote_average: 7.5,
    vote_count: 1139,
    media_type: 'MP4',
  },
};

export const mockMovieCardProps = {
  base,
};
