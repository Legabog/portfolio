import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and (max-width: 460px) {
    flex-direction: column;
  }

  a:last-child {
    border-right: none;
    padding-right: none;
  }
`;
