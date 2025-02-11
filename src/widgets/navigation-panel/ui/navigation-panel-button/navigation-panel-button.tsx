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

export const NavigationPanelButton: FC<Props> = (props) => {
  const { throttledOnClick, isBottomAndLastSection, title, type } = useLogic(props);

  return (
    <Wrapper
      $isVisible={ !isBottomAndLastSection }
      $type={ type }
      data-testid={ `navigation-panel-${type}-button` }
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
