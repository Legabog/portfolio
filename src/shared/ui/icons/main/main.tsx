import { FC } from 'react';

import { StyledSvg } from '@shared/ui';
import { COLORS } from '@shared/constants';
import { customStyle } from './main.styled';

const { orange } = COLORS;

export const MainIcon: FC = () => (
	<StyledSvg
		$customStyle={ customStyle }
		data-testid='main-icon-svg'
		fill='none'
		height='38'
		viewBox='0 0 38 38'
		width='38'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M7 15C7 10.5817 10.5817 7 15 7H23C27.4183 7 31 10.5817 31 15V23C31 27.4183 27.4183 31 23 31H15C10.5817 31 7 27.4183 7 23V15Z'
			data-testid='main-icon-path-1'
			fill={ orange }
		/>
		<rect fill={ orange } height='11' rx='3.5' stroke='white' width='11' x='1.5' y='1.5' />
		<rect fill={ orange } height='11' rx='3.5' stroke='white' width='11' x='25.5' y='25.5' />
		<path
			d='M5 25.5H9C10.933 25.5 12.5 27.067 12.5 29V33C12.5 34.933 10.933 36.5 9 36.5H5C3.067 36.5 1.5 34.933 1.5 33V29C1.5 27.067 3.067 25.5 5 25.5Z'
			data-testid='main-icon-path-2'
			fill={ orange }
		/>
	</StyledSvg>
);
