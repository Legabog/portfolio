import styled from 'styled-components';

import { ItemWrapperProps } from './types';

export const Wrapper = styled.div<ItemWrapperProps>`
	flex: none;
	height: auto;
	position: relative;
	width: auto;
	:hover {
		background-color: ${({ $hoverColor }) => $hoverColor};
	}
`;
export const A = styled.a`
	display: block;
	height: 48px;
	width: 48px;
	border-radius: 12px;
	overflow: visible;
	position: relative;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px rgba(0, 0, 0, 0.1) solid;
	border-radius: 12px;
	box-shadow:
		0px 1px 4px 0px rgba(0, 0, 0, 0.04),
		0px 2px 8px 0px rgba(0, 0, 0, 0.04);
	cursor: pointer;
`;
export const Divider = styled.div``;
