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
`;
