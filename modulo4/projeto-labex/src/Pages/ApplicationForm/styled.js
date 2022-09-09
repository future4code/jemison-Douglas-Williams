import styled from "styled-components";

export const Sections = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
    width: 80%;

    @media screen and (max-width: 1000px) {
            width: 100%;
        }

`

export const Inputs = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 27px;
    margin: 0.5vh auto;
    border-radius: 5px;
    border-color: var(--soft-dark);
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
        height: 4vh;
        margin: 0.5vh auto;
        border-radius: 5px;
        border: 2px solid black;
        border-radius: 5px;
        background-color: #fff;

        

    }
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20vh auto 2vh auto;

    @media screen and (max-width: 900px) {
        width: 100vw;
        font-size: 8vh;
        margin: 20vh 2vh 2vh 2vh;
        }

    @media screen and (max-width: 700px) {
        width: 100vw;
        font-size: 6vh;
        margin: 20vh 2vh 2vh 2vh;
        }

    @media screen and (max-width: 600px) {
    width: 100vw;
    font-size: 5vh;
    margin: 20vh 2vh 2vh 2vh;
    }

    @media screen and (max-width: 380px) {
        width: 100vw;
        font-size: 4vh;
        margin: 20vh 2vh 2vh 2vh;
        }
`