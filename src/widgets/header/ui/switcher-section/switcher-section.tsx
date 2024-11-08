'use client';

import { Wrapper } from './switcher-section.styled';
import { Language, Music, Theme, SoundEffects } from './ui';

export const SwitcherSection: React.FC = () => (
  <Wrapper data-testid='switcher-section'>
    <Language />
    <Theme />
    <SoundEffects />
    <Music />
  </Wrapper>
);
