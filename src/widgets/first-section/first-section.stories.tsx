import { StoryFn, Meta } from '@storybook/react';

import { FirstSection } from './first-section';

export default {
  title: 'Components/FirstSection',
  component: FirstSection,
} as Meta;

const Template: StoryFn = (args) => <FirstSection { ...args } />;

export const Default = Template.bind({});
