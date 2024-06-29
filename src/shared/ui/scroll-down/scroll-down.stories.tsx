import { StoryFn, Meta } from '@storybook/react';

import { ScrollDown } from './scroll-down';

export default {
  title: 'Components/ScrollDown',
  component: ScrollDown,
} as Meta;

const Template: StoryFn = (args) => <ScrollDown { ...args } />;

export const Default = Template.bind({});
