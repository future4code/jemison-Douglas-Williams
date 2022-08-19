import styled from "styled-components";

export const Sections = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    width: 80%;

`

export const Inputs = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 27px;
    margin: 0.5vh auto;
    border-radius: 5px;
    border-color: black;
    color: black;

`

export const SectionsButtons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
`

export const Button = styled.button`
    margin: 1vh 1.5vw 3vh 1.5vw;

`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    height: auto;

    h1 {
        text-align: center;
    }

    select {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100.5%;
        height: 10vh;
        margin: 0.5vh auto;
        border-radius: 5px;
        border: 2px solid black;
        border-radius: 5px;
        background-color: #fff;
    }
`