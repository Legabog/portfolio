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

  @media only screen and (width <= 900px) {
    width: calc(100% - 32px);
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
export const Description = styled.span`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: ${({ theme }) => theme.description};
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 8px;

  &:hover {
    color: ${orange};
  }
`;
export const TopNumber = styled.span`
  &:hover {
    color: ${orange};
  }
`;
