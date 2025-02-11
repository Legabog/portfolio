'use-client';

import { FC } from 'react';

import { Item } from './types';
import { StyledLink, Wrapper, Text } from './navigator-item.styled';
import { useLogic } from './lib';

export const NavigatorItem: FC<Item> = (props) => {
  const { path, text, onClick, animate, clear, generatedString, id } = useLogic(props);

  return (
    <StyledLink
      data-testid={ `navigator-item-${id}` }
      href={ path }
      title={ text }
      onClick={ onClick }
      onMouseEnter={ animate }
      onMouseLeave={ clear }
    >
      <Wrapper>
        <Text>{generatedString}</Text>
      </Wrapper>
    </StyledLink>
  );
};
