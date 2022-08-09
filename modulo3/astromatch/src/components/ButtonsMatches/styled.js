import styled from "styled-components"

export const ButtonsContainer = styled.section`
    border: 1px solid black;
    border: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 10vh;

    

`

export const ButtonMatch = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border-radius: 10px;

    :hover{
        transform: scale(1.2);
    }

    :active{
        transform: scale(1.0);
    }
           
`
export const ButtonNoMatch = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    border-radius: 10px;
    

    :hover{
        transform: scale(1.2);
    }

    :active{
        transform: scale(1.0);
    }

    img {
        width: 30px;
    }
`

export const ButtonClearContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`

export const ButtonClearAll = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    

    :hover{
        transform: scale(1.2);
    }

    :active{
        transform: scale(1.0);
    }

    img {
        width: 40px;
    }

`
export const TextButtonAction = styled.p`

`