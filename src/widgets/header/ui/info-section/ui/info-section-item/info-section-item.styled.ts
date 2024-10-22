import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const fadeIn = keyframes`
	from {
		opacity: 0;
		top: 32px;
	}
	to {
		opacity: 1;
		top: 40px;
	}
	`;
const fadeOut = keyframes`
	from {
		opacity: 1;
		top: 40px;
	}
	to {
		opacity: 0;
		top: 32px;
	}
	`;
export const Tooltip = styled.div<{ $mouseIn: number }>`
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
  animation: ${({ $mouseIn }) => {
      if ($mouseIn === 1) return fadeIn;
      if ($mouseIn === 2) return fadeOut;
    }}
    0.1s linear forwards;
`;
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

  @media only screen and (max-aspect-ratio: 8/7) {
    display: none;
  }
`;
