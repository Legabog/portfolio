import { FC } from 'react';

import { useTranslations } from 'next-intl';
import { useHoverRandomLettersAnimation } from '@shared/hooks';
import { Item } from './types';
import { Wrapper, Text, StyledLink } from './info-section-item.styled';

export const InfoSectionItem: FC<Item> = ({ url, id }) => {
  const t = useTranslations('Header.info-section');
  const text = t(`section-${id}`);
  const linkText = `</A> ${text}`;
  const { animate, clear, generatedString } = useHoverRandomLettersAnimation(linkText);

  return (
    <StyledLink href={ url } target='_blank' title={ text } onMouseEnter={ animate } onMouseLeave={ clear }>
      <Wrapper>
        <Text>{generatedString}</Text>
      </Wrapper>
    </StyledLink>
  );
};
