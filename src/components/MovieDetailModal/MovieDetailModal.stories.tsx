import { ComponentMeta, ComponentStory } from '@storybook/react';
import MovieDetailModal, { IMovieDetailModal } from './MovieDetailModal';
import { mockBaseTemplateProps } from './MovieDetailModal.mocks';

export default {
  title: 'components/MovieDetailModal',
  component: MovieDetailModal,
  argTypes: {},
} as ComponentMeta<typeof MovieDetailModal>;

const Template: ComponentStory<typeof MovieDetailModal> = (args) => (
  <MovieDetailModal {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockBaseTemplateProps.base,
} as IMovieDetailModal;
