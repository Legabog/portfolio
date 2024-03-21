'use client';

import { FC } from 'react';

import { InfoSection, MainIcon } from './ui';
import { Wrapper } from './header.styled';

export const Header: FC = () => (
	<Wrapper>
		<MainIcon />
		<InfoSection />
	</Wrapper>
);
