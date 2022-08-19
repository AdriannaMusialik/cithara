import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before , *::after {
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: 'Play', sans-serif, 'Courier New';
}
.linkcolor{
  color:white;
  
}
.linkformat{
    text-decoration:none;
    margin-right:8px;
}

a {
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
}

`;

export default GlobalStyle;
