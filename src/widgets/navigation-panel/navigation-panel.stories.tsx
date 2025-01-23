import { StoryFn, Meta } from '@storybook/react';

import { NavigationPanel } from './navigation-panel';

export default {
  title: 'Components/NavigationPanel',
  component: NavigationPanel,
} as Meta;

const Template: StoryFn = (args) => <NavigationPanel { ...args } />;

export const Default = Template.bind({});
