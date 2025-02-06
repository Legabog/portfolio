import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Text = styled.span<{ $isFirstTitle?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: ${({ theme, $isFirstTitle }) => theme[$isFirstTitle ? 'color' : 'description']};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0;
  white-space: break-spaces;
  user-select: none;

  &:hover {
    color: ${orange};
  }
`;
