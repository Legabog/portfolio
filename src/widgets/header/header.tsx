'use client';

import { FC } from 'react';

import { IconSection, InfoSection, SwitcherSection } from './ui';
import { Wrapper } from './header.styled';

export const Header: FC = () => (
	<Wrapper data-testid='header'>
		<IconSection />
		<SwitcherSection />
		<InfoSection />
	</Wrapper>
);
