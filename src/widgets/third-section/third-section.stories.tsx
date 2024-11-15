import { StoryFn, Meta } from '@storybook/react';

import { ThirdSection } from './third-section';

export default {
  title: 'Components/ThirdSection',
  component: ThirdSection,
} as Meta;

const Template: StoryFn = (args) => <ThirdSection { ...args } />;

export const Default = Template.bind({});
