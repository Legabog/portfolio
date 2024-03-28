import { FC } from 'react';

import { useTranslations } from 'next-intl';
import { Item } from '../../types';
import { Wrapper, Text, StyledLink } from './info-section-item.styled';

export const InfoSectionItem: FC<Item> = ({ Icon, url, id }) => {
	const t = useTranslations('Header.info-section');
	const text = t(`section-${id}`);

	return (
		<StyledLink href={ url } target='_blank' title={ text }>
			<Wrapper>
				<Icon />
				<Text>{text}</Text>
			</Wrapper>
		</StyledLink>
	);
};
