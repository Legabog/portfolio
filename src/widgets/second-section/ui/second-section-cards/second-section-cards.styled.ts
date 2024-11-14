import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 8px;

  @media only screen and (max-width: 900px) {
    width: calc(100% - 40px);
    margin: 16px 20px;
  }
`;
