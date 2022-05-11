import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeSearch, { IHomeSearch } from './HomeSearch';
import { mockHomeSearchProps } from './HomeSearch.mocks';

export default {
  title: 'Home/HomeSearch',
  component: HomeSearch,
  argTypes: {},
} as ComponentMeta<typeof HomeSearch>;

const Template: ComponentStory<typeof HomeSearch> = (args) => (
  <HomeSearch {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockHomeSearchProps.base,
} as IHomeSearch;
