import styled from 'styled-components';

import { COLORS } from '@shared/constants';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 2.5rem;
  margin: 0 20px;
  user-select: none;
`;
export const Text = styled.span`
  color: ${({ theme }) => theme.color};
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;

  &:hover {
    color: ${COLORS.orange};
  }

  @media only screen and (width <= 600px) {
    font-size: 16px;
  }

  @media only screen and (width <= 400px) {
    font-size: 14px;
  }
`;
