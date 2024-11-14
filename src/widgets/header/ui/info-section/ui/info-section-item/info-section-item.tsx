import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { useHoverRandomLettersAnimation, useMediaQuery } from '@shared/hooks';
import { useSoundEffectsStore } from '@widgets/header';
import { Item } from '../../types';
import { Wrapper, Text, StyledLink } from './info-section-item.styled';

export const InfoSectionItem: FC<Item> = ({ url, id }) => {
  const isBreakpoint = useMediaQuery(900);
  const t = useTranslations('Header.info-section');
  const text = t(`section-${id}`);
  const linkText = `${isBreakpoint ? '' : '</A> '}${text}`;
  const { play } = useSoundEffectsStore();
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(linkText);

  const onClick = () => play('navigation-1.wav');

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
