import { StoryFn, Meta } from '@storybook/react';

import { TechnologyPlanet } from './technology-planet';

export default {
  title: 'Components/TechnologyPlanet',
  component: TechnologyPlanet,
} as Meta;

const Template: StoryFn = (args) => <TechnologyPlanet { ...args } />;

export const Default = Template.bind({});
