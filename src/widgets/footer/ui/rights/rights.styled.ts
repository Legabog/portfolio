import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const Text = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;

  &:hover {
    color: ${COLORS.orange};
  }

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 14px;
  }
`;
