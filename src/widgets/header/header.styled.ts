import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: env(safe-area-inset-top);
  z-index: 2;
  width: calc(100% - 40px);
`;

export const SecondWrapper = styled.div<{ $isScrolled: boolean }>`
  display: grid;
  width: 100%;
  padding: 12px 20px;
  background-color: ${({ theme, $isScrolled }) => ($isScrolled ? theme.header : 'transparent')};
  transition:
    background 300ms ease-in-out,
    backdrop-filter 300ms ease-in-out;
  grid-template-columns: 1fr 1fr 1fr;
  backdrop-filter: blur(${({ $isScrolled }) => ($isScrolled ? 4 : 0)}px);

  @media only screen and (width <= 900px) {
    grid-template-columns: 1fr 1fr;
  }
`;
