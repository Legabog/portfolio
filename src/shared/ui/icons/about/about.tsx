import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const AboutIcon: FC = () => (
	<StyledSvg
		data-testid='about-icon-svg'
		height='24'
		viewBox='0 0 60 60'
		width='24'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M30.01 7.50629C18.965 7.50629 10.01 16.4611 10.01 27.5059C10.01 47.5056 30.01 55.0054 30.01 55.0054C30.01 55.0054 50.01 47.5056 50.01 27.5059C50.01 16.4611 41.055 7.50629 30.01 7.50629ZM27.355 37.2858C13.845 37.2858 15.075 25.006 15.075 25.006C29.81 25.006 27.355 37.2858 27.355 37.2858ZM32.6625 37.2858C32.6625 37.2858 30.2075 25.006 44.9425 25.006C44.945 25.006 46.1725 37.2858 32.6625 37.2858Z'
			data-testid='about-icon-path'
		/>
	</StyledSvg>
);
