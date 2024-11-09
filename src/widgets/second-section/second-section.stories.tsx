import { StoryFn, Meta } from '@storybook/react';

import { SecondSection } from './second-section';

export default {
  title: 'Components/SecondSection',
  component: SecondSection,
} as Meta;

const Template: StoryFn = (args) => <SecondSection { ...args } />;

export const Default = Template.bind({});
