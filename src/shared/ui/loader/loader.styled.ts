import styled, { keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }  
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Main = styled.div`
  z-index: 3;
  width: 60px;
  height: 60px;

  &::after {
    display: block;
    width: 30px;
    height: 30px;
    margin: 8px;
    content: ' ';
    border: 6px solid ${orange};
    border-color: ${orange} transparent;
    border-radius: 50%;
    animation: ${animation} 1.2s linear infinite;
  }
`;
