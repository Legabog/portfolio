import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Wrapper = styled.div`
  display: flex;
`;
export const StyledImage = styled(Image)<{ $customStyles?: string }>`
  position: absolute;
  inset: 0;
  z-index: -2;
  object-fit: cover;
  pointer-events: none;

  ${({ $customStyles }) =>
    $customStyles &&
    css`
      ${$customStyles}
    `}
`;
