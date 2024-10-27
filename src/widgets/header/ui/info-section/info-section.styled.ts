import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: nowrap;

  a:first-child {
    padding-right: 5px;
  }
  a:nth-child(2) {
    padding: 0px 10px;
  }
  a:last-child {
    border-right: none;
    padding-left: 7px;
    padding-right: none;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0px 20px;
    gap: 40px;

    a:first-child {
      padding-right: 0px;
    }
    a:nth-child(2) {
      padding: 0px;
    }
    a:last-child {
      padding-left: 0px;
    }
  }
`;
