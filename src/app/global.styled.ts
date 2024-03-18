import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    min-height: 100vh;
		font-family: MaisonDemiDemi;
		cursor: url('data:image/svg+xml;base64,${btoa('<svg width="24" height="24" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.000244141 -0.0020752L17.5002 44.9971L22.5002 22.4975L45.0003 17.4976L0.000244141 -0.0020752Z" fill="#E8B059"/></svg>')}'), auto;
  }  
	main {
  	background: ${({ theme }) => theme.backgroundColor};
  	display: flex;
		flex-direction: row;
		min-height: 100vh;

		@media only screen and (max-aspect-ratio: 8/7) {
    	flex-direction: column;
		}
	}
`;
