'use client';

import { FC } from 'react';

import { Wrapper, Nav } from './switcher-section.styled';
import { SWITCHER_ITEMS } from './constants';
import { SwitcherItem } from './ui';

export const SwitcherSection: FC = () => (
	<Wrapper data-testid='switcher-section'>
		<Nav>
			{SWITCHER_ITEMS.map((props) => (
				<SwitcherItem key={ props.id } { ...props } />
			))}
		</Nav>
	</Wrapper>
);
