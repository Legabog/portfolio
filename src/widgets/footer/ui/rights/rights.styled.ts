import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  user-select: none;

  @media only screen and (width <= 600px) {
    align-items: flex-start;
  }
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  text-transform: uppercase;

  &:hover {
    color: ${COLORS.orange};
  }

  @media only screen and (width <= 600px) {
    font-size: 10px;
    line-height: 14px;
  }
`;
export const MobileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
