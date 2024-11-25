import { StoryFn, Meta } from '@storybook/react';

import { FourthSection } from './fourth-section';

export default {
  title: 'Components/FourthSection',
  component: FourthSection,
} as Meta;

const Template: StoryFn = (args) => <FourthSection { ...args } />;

export const Default = Template.bind({});
