import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	order: 1;
	flex: 1;
	pointer-events: none;
	@media only screen and (max-aspect-ratio: 8/7) {
		order: 2;
	}
`;
export const InnerTextWrapper = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	& > span:nth-child(1) {
		color: ${COLORS.orange};
		font-size: 40px;
		font-weight: 600;
		align-self: start;
	}
	& > span:nth-child(2) {
		font-size: 30px;
		font-weight: 600;
		display: block;
	}
`;
export const CanvasWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	order: 2;
	flex: 1;
	min-height: 100vh;
`;
