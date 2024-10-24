import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @media only screen and (max-width: 460px) {
    flex-direction: column;
  }

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
