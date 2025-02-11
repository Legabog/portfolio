import { FC } from 'react';

import { Item } from './types';
import { Wrapper, Text, StyledLink } from './info-section-item.styled';
import { useLogic } from './lib';

export const InfoSectionItem: FC<Item> = ({ url, id }) => {
  const { text, generatedString, animate, clear, onClick } = useLogic(id);

  return (
    <StyledLink
      data-testid={ `info-section-${id}` }
      href={ url }
      target='_blank'
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
