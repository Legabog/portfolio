import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orange } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: ${({ theme }) => theme.backgroundColor};
  border: 1px solid ${orange};
  border-radius: 10px;
  margin-top: 40px;

  @media only screen and (width <= 900px) {
    flex-direction: column;
    width: calc(100% - 40px);
    margin-top: 20px;
  }
`;
