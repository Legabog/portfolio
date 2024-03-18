import styled from 'styled-components';

export const TextWrapper = styled.div`
	position: relative;
	order: 1;
	flex: 1;
	pointer-events: none;
	@media only screen and (max-aspect-ratio: 8/7) {
		order: 2;
	}
`;
export const CanvasWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	order: 2;
	flex: 1;
	min-height: 100vh;

	@media only screen and (max-aspect-ratio: 8/7) {
		order: 1;
	}
`;
