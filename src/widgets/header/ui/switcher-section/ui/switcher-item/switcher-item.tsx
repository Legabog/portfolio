import { FC, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';

import { Locale, usePathname, useRouter } from '@locales';
import { SwitcherItemProps } from '../../types';
import { Wrapper, A, Tooltip, Text } from './switcher-item.styled';

export const SwitcherItem: FC<SwitcherItemProps> = ({ id, text }) => {
	const locale = useLocale() as Locale;
	const router = useRouter();
	const pathname = usePathname();
	const t = useTranslations('Header.switcher');
	const [mouseIn, setMouseIn] = useState<number>(0);
	const tooltip = t(`tooltip-${id}`);
	const isActive = locale === text;

	const handleChange = (locale: Locale) => {
		router.push(pathname, { locale });
	};

	return (
		<Wrapper
			data-testid='switcher-item'
			onClick={ () => handleChange(text) }
			onMouseEnter={ () => setMouseIn(1) }
			onMouseLeave={ () => setMouseIn(2) }
		>
			<A $isActvie={ isActive } data-testid='switcher-item-tooltip' title={ tooltip }>
				<Text>{text}</Text>
				<Tooltip $mouseIn={ mouseIn }>{tooltip}</Tooltip>
			</A>
		</Wrapper>
	);
};
