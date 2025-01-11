import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, TitleWrapper, TopNumber } from './card.styled';
import { Props } from './types';

export const Card: FC<Props> = ({ Icon, topNumber, id }) => {
  const t = useTranslations(`FifthSection.FifthSectionCards.FifthSectionCard.${id}`);
  const conditionTranslate = (type: 'title' | 'description') => t(`${type}`);

  const title = conditionTranslate('title');
  const splicedTitle = title.split(' ').slice(0, 2).join(' ');

  return (
    <Wrapper>
      <TitleWrapper>
        <TopNumber title={ title }>{topNumber}</TopNumber>
        <TypeAnimation repeat={ Infinity } sequence={ [title, 1000, splicedTitle, 1000] } speed={ 50 } />
      </TitleWrapper>
      <Icon />
    </Wrapper>
  );
};
