import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  a:first-child {
    margin-right: 30px;
  }

  a:nth-child(2) {
    margin: 0 30px;
  }

  a:last-child {
    margin-left: 30px;
  }

  @media screen and (width <= 800px) {
    a:first-child {
      margin-right: 0;
    }

    a:nth-child(2) {
      margin: 0;
    }

    a:last-child {
      margin-left: 0;
    }
  }
`;
