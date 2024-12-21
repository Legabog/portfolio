import { StoryFn, Meta } from '@storybook/react';

import { Footer } from './footer';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => <Footer { ...args } />;

export const Default = Template.bind({});
