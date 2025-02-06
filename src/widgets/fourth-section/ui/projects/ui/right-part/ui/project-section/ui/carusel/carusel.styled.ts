import styled, { css, keyframes } from 'styled-components';

const moving = (caruselType: 'left' | 'right') => {
  const translateX0: { [key in typeof caruselType]: string } = {
    left: '0',
    right: 'calc(-100% - 20px)',
  };
  const translateX100: { [key in typeof caruselType]: string } = {
    left: 'calc(-100% - 20px)',
    right: '0',
  };

  return keyframes`
  0% {
    transform: translateX(${translateX0[caruselType]});
  }
  100% {
    transform: translateX(${translateX100[caruselType]});
  }
`;
};
export const Span = styled.span<{ $caruselType: 'left' | 'right'; $isPaused: boolean }>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  animation: ${({ $caruselType }) => moving($caruselType)} 40s linear infinite;
  animation-play-state: ${({ $isPaused }) => ($isPaused ? 'paused' : 'running')};
  text-rendering: optimizespeed;
`;
export const Li = styled.li<{
  $customStyles?: string;
}>`
  margin-left: 32px;
  list-style-type: none;

  @media only screen and (width <= 1000px) {
    svg {
      width: 36px;
      height: 36px;
    }
  }

  @media only screen and (width <= 900px) {
    svg {
      width: 54px;
      height: 54px;
    }
  }
`;
export const Wrapper = styled.div<{
  $customStyles?: string;
}>`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  overflow: hidden;
  text-rendering: optimizespeed;

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
