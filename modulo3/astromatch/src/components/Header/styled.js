import styled from "styled-components"

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 100%;
    background-color: white;
    margin: 0 auto;
    
`

export const SpanTitulo1Home = styled.span`
    color: var(--dark-cyan);
    margin-left: auto;

`

export const SpanTitulo2Home = styled.span`
    color: var(--dark-magenta);
    margin-right: 0;


`
export const SpanTitulo1List = styled.span`
    color: var(--dark-cyan);
    margin-left: 0;

`

export const SpanTitulo2List = styled.span`
    color: var(--dark-magenta);
    margin-right: auto;


`

export const ButtonNavegationHome = styled.button`
    margin: 0 6px 0 77px;
    border: none;
    background-color: transparent;
    border-sizing: border-box;
    cursor: pointer;
    border-radius: 20px;

    img {
        height: 30px;
    }


`

export const ButtonNavegationList = styled.button`
    margin: 0 77px 0 6px;
    border: none;
    background-color: transparent;
    border-sizing: border-box;
    cursor: pointer;
    border-radius: 20px;

    img {
        height: 30px;
    }

`