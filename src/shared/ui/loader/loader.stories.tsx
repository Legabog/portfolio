import { StoryFn, Meta } from '@storybook/react';

import { Loader } from './loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as Meta;

const Template: StoryFn = (args) => <Loader { ...args } />;

export const Default = Template.bind({});
