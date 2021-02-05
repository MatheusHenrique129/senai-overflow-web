import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  :root{
    --dark: #282a36;
    --light: #EDF2F4;
    --primary: #EF233C;
    --darkGray: #44475a;
    --secondary: #D90429;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;    
    box-sizing: border-box;

  }

  ::-webkit-scrollbar {
    width: 4px;
    background-color: var(--darkGray);
  }

  ::-webkit-scrollbar-track {
    background-color:var(--darkGray);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: var(--light);
  }

  body {
    color: var(--light);
    font-family: sans-serif;
  }

  button {
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
    color: var(--light);
    transition: .2s ease-in-out;
    border: 1px solid var(--light);
    background-color: var(--darkGray);

    :hover{
      background-color: var(--primary);
    }

    :active{
      transform: scale(0.95);
    }

    :disabled{
      color: var(--darkGray);
      background-color: transparent;
      border: 1px solid var(--darkGray);
    }
  }

  a {
    transition: .2s;
    color: var(--light);

    :hover{
      color: var(--primary);
    }

    :active {
      transform: scale(0.95);
    }
  }

  textarea, select {
    resize: none;
    padding: 5px;
    font-size: 16px;
    border-radius: 4px;
    font-family: sans-serif;
  }

`;
