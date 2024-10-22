import { StoryFn, Meta } from '@storybook/react';

import { BottomPanel } from './bottom-panel';

export default {
  title: 'Components/BottomPanel',
  component: BottomPanel,
} as Meta;

const Template: StoryFn = (args) => <BottomPanel { ...args } />;

export const Default = Template.bind({});
