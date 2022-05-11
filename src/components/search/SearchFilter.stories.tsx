import { ComponentMeta, ComponentStory } from '@storybook/react';
import SearchFilter, { ISearchFilter } from './SearchFilter';
import { mockSearchFilterProps } from './SearchFilter.mocks';

export default {
  title: 'components/SearchFilter',
  component: SearchFilter,
  argTypes: {},
} as ComponentMeta<typeof SearchFilter>;

const Template: ComponentStory<typeof SearchFilter> = (args) => (
  <SearchFilter {...args} />
);

export const Base = Template.bind({});

Base.args = {
  ...mockSearchFilterProps.base,
} as ISearchFilter;
