import { css } from 'styled-components';

export const customStyle = css`
	& rect,
	path {
		stroke: ${({ theme }) => theme.backgroundColor};
	}
`;
