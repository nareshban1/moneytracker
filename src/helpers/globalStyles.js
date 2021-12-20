import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style: none;
        box-sizing: border-box;
        transition: all 0.3s ease-out;
    }
    body{
        background: ${(props) => props.theme.mainBackground};
        transition: 100ms ease;
        display: grid;
        place-items: center;
        min-height: 100vh;
        font-family:'Poppins',sans-serif;
    }

`