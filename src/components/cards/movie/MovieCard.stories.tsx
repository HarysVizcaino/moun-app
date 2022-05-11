import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieCard, { IMovieCard } from './MovieCard';
import { mockMovieCardProps } from './MovieCard.mocks';

export default {
  title: 'cards/MovieCard',
  component: MovieCard,
  argTypes: {},
} as ComponentMeta<typeof MovieCard>;

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <MovieCard {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMovieCardProps.base,
} as IMovieCard;
