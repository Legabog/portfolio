import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (width <= 900px) {
    ${({ $isMobile }) =>
      $isMobile &&
      css`
        margin: 12px 0 0 20px;
      `}
  }
`;
