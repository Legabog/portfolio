import { StoryFn, Meta } from '@storybook/react';

import { FirstSectionTypedText } from './first-section-typed-text';

export default {
  title: 'Components/FirstSectionTypedText',
  component: FirstSectionTypedText,
} as Meta;

const Template: StoryFn = (args) => <FirstSectionTypedText { ...args } />;

export const Default = Template.bind({});
