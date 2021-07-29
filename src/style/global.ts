import { createGlobalStyle } from 'styled-components';

export const GLobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    border: none;
    text-decoration: none;
  }

  html {
    --red: #E92929;
    --dark-green: #2D4A22;
    --green: #49AA26;
    --text: #969CB2;
    --white: #FFFFFF;
    --title: #363F5F;
    --background: #F0F2F5;

    font-size: 62.5%;
    font-family: 'Poppins', sans-serif;
    width: 100%;
    background-color: var(--background);
  }
`;
