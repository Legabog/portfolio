import { StoryFn, Meta } from '@storybook/react';

import { NavigateButton } from './navigate-button';

export default {
  title: 'Components/NavigateButton',
  component: NavigateButton,
} as Meta;

const Template: StoryFn = (args) => <NavigateButton { ...args } />;

export const Default = Template.bind({});
