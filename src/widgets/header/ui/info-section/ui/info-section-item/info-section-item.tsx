import { FC, useState } from 'react';

import { useTranslations } from 'next-intl';
import { Item } from '../../types';
import { Wrapper, Text, StyledLink, Tooltip } from './info-section-item.styled';

export const InfoSectionItem: FC<Item> = ({ Icon, url, id }) => {
  const [mouseIn, setMouseIn] = useState<number>(0);
  const t = useTranslations('Header.info-section');
  const text = t(`section-${id}`);

  return (
    <StyledLink
      href={ url }
      target='_blank'
      title={ text }
      onMouseEnter={ () => setMouseIn(1) }
      onMouseLeave={ () => setMouseIn(2) }
    >
      <Wrapper>
        <Icon />
        <Text>{text}</Text>
        <Tooltip $mouseIn={ mouseIn }>{text}</Tooltip>
      </Wrapper>
    </StyledLink>
  );
};
