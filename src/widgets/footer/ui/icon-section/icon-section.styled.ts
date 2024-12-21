import styled, { css } from 'styled-components';

export const Wrapper = styled.div<{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;

  @media screen and (max-width: 900px) {
    ${({ $isMobile }) =>
      $isMobile &&
      css`
        margin: 12px 0px 0px 20px;
      `}
  }
`;
