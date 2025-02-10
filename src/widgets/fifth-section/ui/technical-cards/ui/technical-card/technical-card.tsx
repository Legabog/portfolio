import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, TitleWrapper, Description, TopNumber } from './technical-card.styled';
import { Props } from './types';

export const TechnicalCard: FC<Props> = ({ Icon, topNumber, id }) => {
  const t = useTranslations(`FifthSection.FifthSectionCards.FifthSectionCard.${id}`);
  const conditionTranslate = (type: 'title' | 'description') => t(type);

  const title = conditionTranslate('title');
  const description = conditionTranslate('description');
  const splicedTitle = title.split(' ').slice(0, 1).join(' ');

  return (
    <Wrapper data-testid={ id }>
      <TitleWrapper>
        <TopNumber title={ title }>{topNumber}</TopNumber>
        <TypeAnimation repeat={ Infinity } sequence={ [title, 1000, splicedTitle, 1000] } speed={ 50 } />
      </TitleWrapper>
      <Description>{description}</Description>
      <Icon />
    </Wrapper>
  );
};
