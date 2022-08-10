import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --deep-blue: #011640;
        --dark-cyan: #008B8B;
        --dark: #383b40;
        --dark-magenta: #8B008B;
        --soft-white: #f2f2f2;
    }

    button {
        border: none;
        background-color: #383b40;
        color: white;
        cursor: pointer;
        outline: none;
        border-radius: 10px;
    
    
        :hover{
            transform: scale(1.2);
        }
        
        :active{
            transform: scale(1.0);
        }
    }

    h1 {
        font-size: 2.5rem;
        font-weight: bold;
        color: var(--soft-white);
        background-color: var();
    }
   
    body {
        background-color: var(--deep-blue);
    }

    * {
        margin: 0;
        padding: 0;
        border-sizing: border-box;
    }


`


