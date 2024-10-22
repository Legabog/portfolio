import { StoryFn, Meta } from '@storybook/react';

import { Header } from './header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header { ...args } />;

export const Default = Template.bind({});
