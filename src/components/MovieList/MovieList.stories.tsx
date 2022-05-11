import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieList, { IMovieList } from './MovieList';
import { mockMovieListProps } from './MovieList.mocks';

export default {
  title: 'templates/MovieList',
  component: MovieList,
  argTypes: {},
} as ComponentMeta<typeof MovieList>;

const Template: ComponentStory<typeof MovieList> = (args) => (
  <MovieList {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMovieListProps.base,
} as IMovieList;
