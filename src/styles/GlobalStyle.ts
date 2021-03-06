import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }
  body{
    background-color: #ffffff;
    font-family: 'Kanit', sans-serif;
    /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input, button, div {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
  }

  .Toastify__toast--default {
    background: #ff932b;
    color: #ffffff;
 }
`;

export default GlobalStyle;
