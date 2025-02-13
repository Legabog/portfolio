import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';

import { Wrapper, TitleWrapper, Description, TopNumber } from './technical-card.styled';
import { Props } from './types';
import { useLogic } from './lib';

export const TechnicalCard: FC<Props> = ({ Icon, topNumber, id }) => {
  const { title, description, splicedTitle } = useLogic(id);

  return (
    <Wrapper data-testid={ id }>
      <TitleWrapper>
        <TopNumber title={ title }>{topNumber}</TopNumber>
        <TypeAnimation repeat={ Infinity } sequence={ [title, 1000, splicedTitle, 1000] } speed={ 30 } />
      </TitleWrapper>
      <Description>{description}</Description>
      <Icon />
    </Wrapper>
  );
};
