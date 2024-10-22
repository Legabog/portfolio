import styled from 'styled-components';

export const Wrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  &&& > div {
    margin-bottom: 150px;
  }
`;
export const ScrollWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: -30px;
`;
