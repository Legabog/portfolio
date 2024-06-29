import styled, { keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

const moveDown = keyframes`
0% {
  transform: translateY(0px);
  opacity: 1;
}
25% {
  transform: translateY(2px);
  opacity: 0.5;
}
50% {
  transform: translateY(0px);
  opacity: 1;
}
75% {
  transform: translateY(-2px);
  opacity: 1;
}
100% {
  transform: translateY(0px);
  opacity: 1;
}
	`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 4px;

  svg {
    width: 10px;
    height: 6px;
    border-radius: 5px;
    animation: ${moveDown} 0.75s ease-out 3s infinite;

    path {
      fill: ${orange};
    }
  }
`;
export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  color: ${orange};
`;
