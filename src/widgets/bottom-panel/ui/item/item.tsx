import { FC, useRef } from 'react';

import { Wrapper, A, Tooltip } from './item.styled';

export const Item: FC<Omit<Icon.Props, 'id'>> = ({ Icon, tooltip, color }) => {
	const tooltipRef = useRef<HTMLDivElement>(null);

	return (
		<Wrapper $hoverColor={ color } $tooltipWidth={ tooltipRef.current?.offsetWidth } data-testid='item'>
			<Tooltip ref={ tooltipRef }>{tooltip}</Tooltip>
			<A title={ tooltip }>
				<Icon />
			</A>
		</Wrapper>
	);
};
