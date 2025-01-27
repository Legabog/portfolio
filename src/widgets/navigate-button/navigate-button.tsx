import { FC } from 'react';

import { ChevronDownIcon } from '@shared/ui/icons';
import { Wrapper } from './navigate-button.styled';
import { useLogic } from './lib';

export const NavigateButton: FC = () => {
  const { isInitalized, isVisible, text, throttledCallback } = useLogic();

  return (
    <Wrapper
      $isInitalized={ isInitalized }
      $isVisible={ isVisible }
      data-testid='navigate-button'
      title={ text }
      onClick={ throttledCallback }
    >
      <ChevronDownIcon />
    </Wrapper>
  );
};
