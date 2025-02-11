import { FC } from 'react';

import { Props } from './types';
import { Wrapper, StyledLink } from './social-item.styled';
import { useLogic } from './lib';

export const SocialItem: FC<Props> = ({ url, id, Icon }) => {
  const { text, onClick } = useLogic(id);

  return (
    <StyledLink
      data-testid={ `social-${id}` }
      href={ url }
      target='_blank'
      title={ text }
      onClick={ onClick }
    >
      <Wrapper>
        <Icon />
      </Wrapper>
    </StyledLink>
  );
};
