import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  user-select: none;

  @media only screen and (max-width: 600px) {
    align-items: flex-start;
  }
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
    font-size: 10px;
    line-height: 14px;
  }
`;
export const MobileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
