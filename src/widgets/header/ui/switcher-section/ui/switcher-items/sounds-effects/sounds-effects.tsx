'use client';

import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { SoundEffectOnIcon, SoundEffectOffIcon } from '@shared/ui';
import { Wrapper, A } from './sounds-effects.styled';
import { useSoundEffectsStore } from './model';

export const SoundEffects: FC = () => {
  const { toggle, isMuted } = useSoundEffectsStore();
  const t = useTranslations('Header.sound-effects');
  const tooltip = t(`tooltip-turn-${!isMuted ? 'on' : 'off'}`);
  const conditionIcon = !isMuted ? <SoundEffectOnIcon /> : <SoundEffectOffIcon />;

  const handleChange = () => toggle();
  return (
    <Wrapper data-testid='sound-effects-switcher-item' onClick={ handleChange }>
      <A data-testid='sound-effects-switcher-item-tooltip' title={ tooltip }>
        {conditionIcon}
      </A>
    </Wrapper>
  );
};
