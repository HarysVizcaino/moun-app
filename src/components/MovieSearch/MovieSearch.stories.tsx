import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieSearch, { IMovieSearch } from './MovieSearch';
import { mockMovieSearchProps } from './MovieSearch.mocks';

export default {
  title: 'components/MovieSearch',
  component: MovieSearch,
  argTypes: {},
} as ComponentMeta<typeof MovieSearch>;

const Template: ComponentStory<typeof MovieSearch> = (args) => (
  <MovieSearch {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockMovieSearchProps.base,
} as IMovieSearch;
