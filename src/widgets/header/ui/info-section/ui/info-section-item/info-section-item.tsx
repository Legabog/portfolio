import { FC } from 'react';
import Link from 'next/link';

import { Item } from '../../types';
import { Wrapper, Text } from './info-section-item.styled';

export const InfoSectionItem: FC<Omit<Item, 'id'>> = ({ Icon, text, url }) => (
	<Link href={ url }>
		<Wrapper>
			<Icon />
			<Text>{text}</Text>
		</Wrapper>
	</Link>
);
