import { FC } from 'react';

import { ArrowIcon } from '@shared/ui';
import {
  Wrapper,
  SecondaryWrapper,
  ThirdWrapper,
  FourthWrapper,
  FirstIconWrapper,
  SecondIconWrapper,
} from './navigation-panel-button.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const NavigationPanelButton: FC<Props> = ({ type, activeSectionId }) => {
  const { throttledOnClick, isBottomAndLastSection, title } = useLogic({ type, activeSectionId });

  return (
    <Wrapper
      $isVisible={ !isBottomAndLastSection }
      $type={ type }
      data-testid={ `navigation-panel-${type}-button` }
      disabled={ isBottomAndLastSection }
      title={ title }
      onClick={ throttledOnClick }
    >
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
