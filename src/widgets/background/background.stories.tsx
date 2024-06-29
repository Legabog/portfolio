import { StoryFn, Meta } from '@storybook/react';

import { Background } from './background';

export default {
  title: 'Components/Background',
  component: Background,
} as Meta;

const Template: StoryFn = (args) => <Background { ...args } />;

export const Default = Template.bind({});
