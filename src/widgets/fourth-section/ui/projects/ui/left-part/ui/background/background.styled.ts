import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div``;
export const StyledImage = styled(Image)<{ $customStyles?: string }>`
  position: absolute;
  top: 0;
  z-index: -2;
  object-fit: fill;
  pointer-events: none;

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
