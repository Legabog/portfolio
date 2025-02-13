import styled, { css, keyframes } from 'styled-components';

import { COLORS } from '@shared/constants';

const { orangeSecondary, orange } = COLORS;

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
export const Wrapper = styled.div<{ $customStyles?: string }>`
  width: 80%;
  user-select: none;

  @media only screen and (width <= 900px) {
    width: calc(100% - 40px);
  }
  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
export const WrapperScroll = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 8px;

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
export const WrapperText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${orangeSecondary};

  p {
    margin-top: 8px;
  }

  p:first-child {
    margin-right: 30%;
  }

  @media only screen and (width <= 900px) {
    p:first-child {
      margin-right: 20%;
    }
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: break-spaces;
`;
