import styled from 'styled-components';
import Link from 'next/link';

import { COLORS } from '@shared/constants';

const { orange, orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (width <= 900px) {
    width: 100%;
  }

  @media screen and (width <= 600px) {
    justify-content: flex-end;
  }
`;
export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  svg {
    width: 20px;
    height: 20px;
  }

  path {
    fill: ${orangeSecondary};
    transition: fill 0.1s ease;
  }

  :hover {
    path {
      fill: ${orange};
    }
  }

  @media screen and (width <= 900px) {
    width: 100%;
  }
`;
