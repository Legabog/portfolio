import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: none;
  width: 50%;
`;
export const Title = styled.div`
  color: ${({ theme }) => theme.color};
`;
export const InnerTextWrapper = styled.div`
  width: 100%;
  margin-left: 20%;
  margin-bottom: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 96px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -4.8px;
  align-self: start;
  display: block;

  & > span:nth-child(2) {
    color: ${COLORS.orange};
  }
`;
export const Description = styled.div`
  font-size: 18px;
  margin-left: 6px;
  letter-spacing: 0px;
  color: ${COLORS.orange};
`;
