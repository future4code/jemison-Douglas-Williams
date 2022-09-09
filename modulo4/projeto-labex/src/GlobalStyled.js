import { createGlobalStyle } from "styled-components";
import styled from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root {
        --deep-blue: #011640;
        --dark-cyan: #008B8B;
        --soft-dark: #383b40;
        --dark-magenta: #8B008B;
        --soft-white: #f2f2f2;
        --Dark-Grey: #A9A9A9;
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
        width: 100px;
        height: 4vh;
        font-size: 0.8rem;
        
    
    
        :hover{
            transform: scale(1.1);
        }
        
        :active{
            transform: scale(1.0);
        }

        @media (max-width: 500px) {
            height: 6vh;
            font-size: 0.8rem;
        }

        @media (max-width: 380px) {
            height: 5vh;
        }

    }


    h1 {
        text-align: center;
        font-size: 10vh;
        font-weight: bold;
        color: var(--soft-dark);

        @media (max-width: 500px) {
        width: 100%;
        font-size: 6vh;
        }

    }
   
    body {
        background-color: var(--soft-white);
        
    }

    * {
        margin: 0;
        padding: 0;
        border-sizing: border-box;
    }
    
`

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 80vw;
    border-radius: 10px;
    padding: 10px;

`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid var(--soft-dark);
    width: 60%;
    height: 10vh;
    margin: 0 auto;

    
`



