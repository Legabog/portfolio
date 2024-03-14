'use client';

import { FC } from 'react';

import { Item } from './ui';
import { BOTTOM_PANEL_ITEMS } from './constants';
import { Nav, Wrapper } from './bottom-panel.styled';

export const BottomPanel: FC = () => (
	<Wrapper data-testid='bottom-panel'>
		<Nav>
			{BOTTOM_PANEL_ITEMS.map((props) => (
				<Item key={ props.id } { ...props } />
			))}
		</Nav>
	</Wrapper>
);
