import { StoryFn, Meta } from '@storybook/react';

import { FifthSection } from './fifth-section';

export default {
  title: 'Components/FifthSection',
  component: FifthSection,
} as Meta;

const Template: StoryFn = (args) => <FifthSection { ...args } />;

export const Default = Template.bind({});
