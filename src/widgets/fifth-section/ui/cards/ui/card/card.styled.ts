import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 32px;
  user-select: none;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};

  @media only screen and (width <= 900px) {
    width: calc(100% - 40px);
    padding: 16px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.color};
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  text-transform: uppercase;

  & span:first-child {
    padding-right: 16px;
    border-right: 1px solid ${orangeSecondary};
  }

  & span:last-child {
    padding-left: 16px;
  }
`;
export const TopNumber = styled.span`
  &:hover {
    color: ${orange};
  }
`;
