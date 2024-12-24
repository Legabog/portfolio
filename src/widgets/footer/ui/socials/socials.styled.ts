import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  a:first-child {
    margin-right: 30px;
  }
  a:nth-child(2) {
    margin: 0px 30px;
  }
  a:last-child {
    margin-left: 30px;
  }

  @media screen and (max-width: 800px) {
    a:first-child {
      margin-right: 0px;
    }
    a:nth-child(2) {
      margin: 0px 0px;
    }
    a:last-child {
      margin-left: 0px;
    }
  }
`;
