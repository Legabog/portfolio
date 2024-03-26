import { FC } from 'react';

import { StyledSvg } from '@shared/ui';

export const ResumeIcon: FC = () => (
	<StyledSvg
		data-testid='resume-icon-svg'
		height='18'
		viewBox='0 0 40 50'
		width='18'
		xmlns='http://www.w3.org/2000/svg'
	>
		<path
			d='M28.5355 -0.00115967H5.00049C2.24299 -0.00115967 0.000488281 2.2438 0.000488281 4.99875V44.998C0.000488281 47.7555 2.24299 49.9979 5.00049 49.9979H35.0005C37.758 49.9979 40.0005 47.7555 40.0005 44.998V11.4636L28.5355 -0.00115967ZM7.50049 24.9984H27.5005V29.9983H7.50049V24.9984ZM32.5005 39.9981H7.50049V34.9982H32.5005V39.9981ZM25.0005 14.9986V2.4988L37.5005 14.9986H25.0005Z'
			data-testid='resume-icon-path'
		/>
	</StyledSvg>
);
