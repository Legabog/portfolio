import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const RootWrapper = styled.div``;
export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid ${orangeSecondary};
`;
export const Text = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  margin-bottom: 8px;
  cursor: pointer;
  color: ${({ theme }) => theme.color};
  text-transform: uppercase;
  white-space: break-spaces;

  &:hover {
    color: ${orange};
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 8px;

  a:first-child {
    padding-right: 5px;
  }
  a:nth-child(2) {
    padding: 0px 10px;
  }
  a:last-child {
    border-right: none;
    padding-left: 7px;
    padding-right: none;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0px 20px;
    gap: 40px;

    a:first-child {
      padding-right: 0px;
    }
    a:nth-child(2) {
      padding: 0px;
    }
    a:last-child {
      padding-left: 0px;
    }
  }
`;
