'use client';

import { FC } from 'react';

import { Item } from './ui';
import { BOTTOM_PANEL_ITEMS } from './constants';
import { Nav, Wrapper } from './bottom-panel.styled';

export const BottomPanel: FC = () => (
	<Wrapper>
		<Nav>
			{BOTTOM_PANEL_ITEMS.map(({ id, ...props }) => (
				<Item key={ id } { ...props } />
			))}
		</Nav>
	</Wrapper>
);
