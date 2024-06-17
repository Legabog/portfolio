import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    min-height: 100vh;
		background: ${({ theme }) => theme.backgroundColor};
		transition: background-color 0.5s;
  }  
`;
