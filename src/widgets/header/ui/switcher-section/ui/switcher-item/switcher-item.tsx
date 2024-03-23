import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

import { Locale } from '@locales';

import { SwitcherItemProps } from '../../types';
import { Wrapper, A, Tooltip, Text } from './switcher-item.styled';

export const SwitcherItem: FC<SwitcherItemProps> = ({ id, text }) => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const t = useTranslations('Header.switcher');
	const tooltip = t(`tooltip-${id}`);
	const isActive = locale === text;

	const handleChange = (locale: Locale) => {
		document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SamesSite=Lax`;
		router.refresh();
	};

	return (
		<Wrapper data-testid='switcher-item' onClick={ () => handleChange(text) }>
			<A $isActvie={ isActive } data-testid='switcher-item-tooltip' title={ tooltip }>
				<Text>{text}</Text>
				<Tooltip>{tooltip}</Tooltip>
			</A>
		</Wrapper>
	);
};
