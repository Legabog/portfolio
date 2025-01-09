import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
  }
`;
export const WrapperCard = styled.div`
  margin-top: 40px;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};

  @media only screen and (max-width: 900px) {
    margin-top: 20px;
  }
`;
