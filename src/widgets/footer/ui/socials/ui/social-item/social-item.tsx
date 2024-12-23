import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useSoundEffectsStore } from '@widgets/header';
import { Props } from './types';
import { Wrapper, StyledLink } from './social-item.styled';

export const SocialItem: FC<Props> = ({ url, id, Icon }) => {
  const t = useTranslations('Header.info-section');
  const text = t(`section-${id}`);
  const { play } = useSoundEffectsStore();

  const onClick = () => play('navigation-1.wav');

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
