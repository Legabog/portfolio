import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

const fadeIn = keyframes`
	from {
		opacity: 0;
		top: 30px;
	}
	to {
		opacity: 1;
		top: 38px;
	}
	`;
const fadeOut = keyframes`
	from {
		opacity: 1;
		top: 38px;
	}
	to {
		opacity: 0;
		top: 30px;
	}
	`;
export const Tooltip = styled.div`
	display: flex;
	flex: none;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	opacity: 0;
	padding: 4px 8px;
	position: absolute;
	border: 1px ${({ theme }) => theme.boxShadow} solid;
	background-color: ${({ theme }) => theme.backgroundColor};
	white-space: pre;
	height: min-content;
	width: min-content;
	color: ${({ theme }) => theme.color};
	pointer-events: none;
	border-radius: 6px;
	box-shadow:
		${({ theme }) => theme.boxShadow} 0px 0px 4px 0px,
		${({ theme }) => theme.boxShadow} 0px 2px 8px 0px,
		${({ theme }) => theme.boxShadow} 0px 4px 16px 0px;
`;
export const Text = styled.span`
	color: ${({ theme }) => theme.color};
`;
export const A = styled.a<{ $isActvie: boolean }>`
	position: relative;
	display: block;
	height: 28px;
	width: 28px;
	box-sizing: border-box;
	border-radius: 7px;
	overflow: visible;
	text-decoration: none;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: background-color 0.5s;
	${({ $isActvie }) =>
		$isActvie &&
		css`
			border: 1px ${orange} solid;
			& ${Text} {
				color: ${orange};
			}
			& ${Tooltip} {
				color: ${orange};
				border: 1px ${orange} solid;
			}
		`};
`;
export const Wrapper = styled.div`
	position: relative;
	flex: none;
	height: auto;
	width: auto;
	font-size: 14px;
	font-weight: 500;
	&:hover ${A} {
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:active ${A} {
		transform: scale(0.95);
		background-color: rgba(0, 0, 0, 0.15);
	}
	&:hover ${Tooltip} {
		animation: ${fadeIn} 0.1s linear forwards;
	}
	&:not(:hover) ${Tooltip} {
		animation: ${fadeOut} 0.1s linear forwards;
	}
`;
