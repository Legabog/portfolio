'use-client';

import { FC } from 'react';

import { NAVIGATOR_ITEMS, NAVIGATOR_TITLES } from './constants';
import { Wrapper, WrapperTitles, WrapperItems } from './navigator.styled';
import { NavigatorItem, NavigatorTitle } from './ui';

export const Navigator: FC = () => (
  <Wrapper data-testid='navigator'>
    <WrapperTitles>
      {NAVIGATOR_TITLES.map(({ id }) => (
        <NavigatorTitle key={ id } id={ id } />
      ))}
    </WrapperTitles>
    <WrapperItems>
      {NAVIGATOR_ITEMS.map((props) => (
        <NavigatorItem key={ props.id } { ...props } />
      ))}
    </WrapperItems>
  </Wrapper>
);
