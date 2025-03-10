import { FC } from 'react';

import { Props } from './types';
import { Wrapper, StyledLink } from './social-item.styled';
import { useLogic } from './lib';

export const SocialItem: FC<Props> = ({ url, id, Icon }) => {
  const { text, conditionalUrl, onClick } = useLogic(id, url);

  return (
    <StyledLink
      data-testid={ `social-${id}` }
      href={ conditionalUrl as string }
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
