import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { IntContext } from '../../../data-components/Internationalization';
import { movieModel } from '../../../models/movie-model';

export interface IMovieCard {
  item: movieModel;
  learnMoreAction: (item: movieModel) => void;
}

const MovieCard: React.FC<IMovieCard> = ({ item, learnMoreAction }) => {
  const { name, title, poster_path, overview } = item;

  const int = useContext(IntContext);

  const { language } = int;
  const { card } = language;
  return (
    <Card sx={{ maxWidth: 345, minWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${process.env.NEXT_PUBLIC_IMAGE_URL}w300/${poster_path}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name ? name : title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${overview.substring(0, 130)}...`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => {
            learnMoreAction(item);
          }}
        >
          {card.learnMore}
        </Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
