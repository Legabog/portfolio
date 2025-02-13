import { FC } from 'react';

import { Wrapper, Text } from './footer.styled';
import { useLogic } from './lib';

export const Footer: FC = () => {
  const { text } = useLogic();

  return (
    <Wrapper data-testid='footer'>
      <Text title={ text }>{text}</Text>
    </Wrapper>
  );
};
