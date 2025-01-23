import { FC } from 'react';

import { ArrowIcon } from '@shared/ui';
import { useSoundEffectsStore } from '@widgets/header';
import {
  Wrapper,
  SecondaryWrapper,
  ThirdWrapper,
  FourthWrapper,
  FirstIconWrapper,
  SecondIconWrapper,
} from './navigation-panel-button.styled';
import { Props } from './types';

export const NavigationPanelButton: FC<Props> = ({ type }) => {
  const { play } = useSoundEffectsStore();

  const onClick = () => {
    play('navigation-1.wav');
  };

  return (
    <Wrapper $type={ type } onClick={ onClick }>
      <SecondaryWrapper>
        <ThirdWrapper>
          <FourthWrapper>
            {[FirstIconWrapper, SecondIconWrapper].map((Wrapper, index) => (
              <Wrapper key={ index }>
                <ArrowIcon />
              </Wrapper>
            ))}
          </FourthWrapper>
        </ThirdWrapper>
      </SecondaryWrapper>
    </Wrapper>
  );
};
