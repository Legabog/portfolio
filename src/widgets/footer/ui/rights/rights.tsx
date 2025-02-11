import { FC } from 'react';

import { Wrapper, Text, MobileTextWrapper } from './rights.styled';
import { useLogic } from './lib';

export const Rights: FC = () => {
  const { isBreakpoint, text, rights } = useLogic();

  return (
    <Wrapper data-testid='footer-rights'>
      <Text title={ text }>{text}</Text>
      {isBreakpoint && (
        <MobileTextWrapper>
          <Text title={ rights }>{rights}</Text>
        </MobileTextWrapper>
      )}
    </Wrapper>
  );
};
