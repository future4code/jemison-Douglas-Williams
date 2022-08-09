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

    body {
        background-color: var(--deep-blue);
    }

    * {
        margim: 0;
        padding: 0;
        border-sizing: border-box;
    }
`
export const ContainerPai = styled.section`

`

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 15vh auto;
    height: 60vh;
    max-width: 300px;
    border: 4px solid var(--dark);
    background-color: var(--soft-white);
`
