import { ComponentMeta, ComponentStory } from '@storybook/react';
import TopMenu, { ITopMenu } from './TopMenu';
import { mockTopMenuProps } from './TopMenu.mocks';

export default {
  title: 'menu/TopMenu',
  component: TopMenu,
  argTypes: {},
} as ComponentMeta<typeof TopMenu>;

const Template: ComponentStory<typeof TopMenu> = (args) => (
  <div
    style={{
      display: 'flex',
      height: 'calc(100vh - 64px)',
      backgroundColor: 'white',
    }}
  >
    <TopMenu {...args} />
  </div>
);

export const Base = Template.bind({});

Base.args = {
  ...mockTopMenuProps.base,
} as ITopMenu;
