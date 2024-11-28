import styled from 'styled-components';
import { COLORS } from '@shared/constants';

const { orangeSecondary } = COLORS;

export const Wrapper = styled.div`
  margin-top: 80px;
  width: 80%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid ${orangeSecondary};
  border-bottom: 1px solid ${orangeSecondary};
`;
export const RightPart = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const VTB = styled.div`
  width: 500px;
  height: 800px;
`;
export const LINKIFY = styled.div`
  width: 500px;
  height: 800px;
`;
export const AMUSIC = styled.div`
  width: 500px;
  height: 800px;
`;
