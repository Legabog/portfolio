import { StoryFn, Meta } from '@storybook/react';

import { Spline } from './spline';

export default {
  title: 'Components/Spline',
  component: Spline,
} as Meta;

const Template: StoryFn = (args) => <Spline { ...args } />;

export const Default = Template.bind({});
