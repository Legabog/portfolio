import styled from 'styled-components';

import { COLORS } from '@shared/constants';

const { orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  margin-top: 16px;
`;
export const WrapperTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const WrapperItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 1px solid ${orangeSecondary};

  div:first-child {
    margin-top: 8px;
  }
`;
