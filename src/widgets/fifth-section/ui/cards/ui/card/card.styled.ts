import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};
  user-select: none;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    padding: 16px;
  }
`;
export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: ${({ theme }) => theme.color};
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
