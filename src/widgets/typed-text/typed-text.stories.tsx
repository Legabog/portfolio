import { StoryFn, Meta } from '@storybook/react';

import { TypedText } from './typed-text';

export default {
  title: 'Components/TypedText',
  component: TypedText,
} as Meta;

const Template: StoryFn = (args) => <TypedText { ...args } />;

export const Default = Template.bind({});
