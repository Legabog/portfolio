'use client';

import { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Item } from './ui';
import { Nav, Wrapper } from './bottom-panel.styled';
import { BOTTOM_PANEL_ITEMS } from './constants';

export const BottomPanel: FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <Wrapper data-testid='bottom-panel'>
      <Nav>
        {BOTTOM_PANEL_ITEMS.map((item, index) => ({
          ...item,
          color: theme?.bottomPanelItems[index],
        })).map((props) => (
          <Item key={ props.id } { ...props } />
        ))}
      </Nav>
    </Wrapper>
  );
};
