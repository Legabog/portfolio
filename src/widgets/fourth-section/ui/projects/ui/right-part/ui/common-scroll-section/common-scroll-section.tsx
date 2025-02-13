import { FC } from 'react';

import { ChevronDownIcon } from '@shared/ui';
import { Wrapper, Text } from './common-scroll-section.styled';
import { useLogic } from './lib';

export const CommonScrollSection: FC = () => {
  const { isVisible, isPlayingAnimation, text } = useLogic();

  return (
    <Wrapper
      $isPlayingAnimation={ isPlayingAnimation }
      $isVisible={ isVisible }
      data-testid='common-scroll-section'
      id='common-scroll-section'
    >
      <Text title={ text }>{text}</Text>
      <ChevronDownIcon />
    </Wrapper>
  );
};
