import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
  width: 80%;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
`;
export const VTB = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1200px;
  /* background-color: red; */
`;
export const LINKIFY = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1200px;
  /* background-color: pink; */
`;
export const TempCard = styled.div`
  width: 100%;
  height: 300px;
  background-color: green;
`;
export const MUSICON = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1200px;
  /* background-color: purple; */
`;
