import { FC } from 'react';

import { Item } from '../../types';
import { Wrapper, Text, StyledLink } from './info-section-item.styled';

export const InfoSectionItem: FC<Omit<Item, 'id'>> = ({ Icon, text, url }) => (
	<StyledLink href={ url } target='_blank'>
		<Wrapper>
			<Icon />
			<Text>{text}</Text>
		</Wrapper>
	</StyledLink>
);
