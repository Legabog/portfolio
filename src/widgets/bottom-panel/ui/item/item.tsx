import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Wrapper, A, Tooltip } from './item.styled';

export const Item: FC<Icon.Props> = ({ Icon, color, id }) => {
	const t = useTranslations('BottomPanel');
	const tooltip = t(`tooltip-${id}`);

	return (
		<Wrapper $hoverColor={ color } data-testid='item'>
			<A title={ tooltip }>
				<Tooltip>{tooltip}</Tooltip>
				<Icon />
			</A>
		</Wrapper>
	);
};
