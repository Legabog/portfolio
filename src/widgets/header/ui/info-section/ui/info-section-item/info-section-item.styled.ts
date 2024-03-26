import styled from 'styled-components';
import Link from 'next/link';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 8px;
	gap: 6px;
	background-color: ${({ theme }) => theme.backgroundColor};
	border-radius: 8px;
	box-shadow:
		0px 0px 4px 0px ${({ theme }) => theme.boxShadow},
		0px 4px 16px 0px ${({ theme }) => theme.boxShadow},
		0px 8px 32px 0px ${({ theme }) => theme.boxShadow};
`;
export const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	text-decoration: none;
`;
export const Text = styled.span`
	display: flex;
	height: auto;
	font-size: 14px;
	font-weight: 500;
	color: ${({ theme }) => theme.color};
`;
