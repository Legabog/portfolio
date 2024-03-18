import styled from 'styled-components';

export const Wrapper = styled.div`
	flex: none;
	bottom: 12px;
	width: auto;
	height: auto;
	position: fixed;
	left: 50%;
	transform: translate(-50%);
	z-index: 2;
`;
export const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	align-content: center;
	align-items: center;
	flex-wrap: nowrap;
	gap: 12px;
	height: min-content;
	justify-content: center;
	overflow: visible;
	padding: 12px;
	position: relative;
	width: min-content;

	backdrop-filter: blur(12px);
	background-color: ${({ theme }) => theme.backgroundColor};
	border-radius: 24px;
	box-shadow:
		0px 0px 4px 0px ${({ theme }) => theme.boxShadow},
		0px 4px 16px 0px ${({ theme }) => theme.boxShadow},
		0px 8px 32px 0px ${({ theme }) => theme.boxShadow};
	opacity: 1;
`;
