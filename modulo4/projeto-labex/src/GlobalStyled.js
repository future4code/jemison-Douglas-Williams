import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --deep-blue: #011640;
        --dark-cyan: #008B8B;
        --soft-dark: #383b40;
        --dark-magenta: #8B008B;
        --soft-white: #f2f2f2;
    }

    button {
        justify-content: center;
        align-items: center;
        border-color:  var(--soft-dark);
        border-radius: 10px;
        background-color: var(--soft-dark);
        color: var(--soft-white);
        cursor: pointer;
        outline: none;
        width: 10vw;
        height: 6vh;
        font-size: 1.5rem;
        
    
    
        :hover{
            transform: scale(1.1);
        }
        
        :active{
            transform: scale(1.0);
        }
    }

    h1 {
        font-size: 4rem;
        margin-bottom: 3rem;
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


