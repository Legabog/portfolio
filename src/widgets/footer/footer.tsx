'use client';

import { FC } from 'react';

import { Wrapper } from './footer.styled';
import { useLogic } from './lib';

export const Footer: FC = () => {
  const { conditionalPanel } = useLogic();

  return (
    <Wrapper data-testid='footer' id='footer'>
      {conditionalPanel}
    </Wrapper>
  );
};
