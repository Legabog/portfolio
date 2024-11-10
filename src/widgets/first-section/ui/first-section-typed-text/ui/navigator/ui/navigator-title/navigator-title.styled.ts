import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div``;
export const Text = styled.span<{ $isFirstTitle?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  margin-bottom: 8px;
  cursor: pointer;
  color: ${({ theme, $isFirstTitle }) => theme[$isFirstTitle ? 'color' : 'description']};
  text-transform: uppercase;
  white-space: break-spaces;

  &:hover {
    color: ${orange};
  }
`;
