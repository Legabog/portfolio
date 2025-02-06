import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;

  a:first-child {
    padding-right: 5px;
  }

  a:nth-child(2) {
    padding: 0 10px;
  }

  a:last-child {
    padding-right: 0;
    padding-left: 7px;
    border-right: none;
  }

  @media screen and (width <= 900px) {
    flex-direction: column;
    gap: 40px;
    justify-content: flex-start;
    width: 100%;
    margin: 0 20px;

    a:first-child {
      padding-right: 0;
    }

    a:nth-child(2) {
      padding: 0;
    }

    a:last-child {
      padding-left: 0;
    }
  }
`;
