import { createGlobalStyle } from "styled-components";

/*
   Creation of global styles with styled components library. Css or SASS files are ommited completely.
*/
export default createGlobalStyle`

@font-face {
    font-family: 'Roboto Condensed';
    src: url("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap&subset=cyrillic-ext");
  }

  body {
    font-family: 'Roboto Condensed';
    overflow: auto;
  }

  footer {
	  padding:0;
	  margin:0;
	  font-size: 1.3em;
  }
`;
