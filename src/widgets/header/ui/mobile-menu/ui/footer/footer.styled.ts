import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
  margin: 0px 20px;
`;
export const Text = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color};

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
