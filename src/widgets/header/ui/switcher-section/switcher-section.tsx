/* eslint-disable */

'use client';

import { FC } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

import { Locale } from '@locales';
import { Wrapper, Nav, WrapperItem, A } from './switcher-section.styled';

export const SwitcherSection: FC = () => {
	const locale = useLocale() as Locale;
	const router = useRouter();

	const handleChange = (locale: Locale) => {
		document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SamesSite=Lax`;
		router.refresh();
	};

	return (
		<Wrapper>
			<Nav>
				<WrapperItem>
					<A>Da</A>
				</WrapperItem>
				<WrapperItem>
					<A>NET</A>
				</WrapperItem>
			</Nav>
		</Wrapper>
	);
};
