import { FC } from 'react';

import { Wrapper, Text } from './footer.styled';
import { useLogic } from './lib';

export const Footer: FC = () => {
  const { text, generatedString, animate, clear } = useLogic();

  return (
    <Wrapper data-testid='footer'>
      <Text title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
        {generatedString}
      </Text>
    </Wrapper>
  );
};
