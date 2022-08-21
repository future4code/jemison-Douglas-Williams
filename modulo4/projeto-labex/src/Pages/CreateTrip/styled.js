import styled from "styled-components";


export const Title = styled.h1`
    margin-top: 25vh;

    @media (max-width: 620px) {
        font-size: 8vh;
    }
    @media (max-width: 520px) {
        font-size: 7vh;
    }
    @media (max-width: 420px) {
        font-size: 5vh;
    }
    @media (max-width: 300px) {
        font-size: 4vh;
    }
`

export const Button = styled.button`
    margin: 0 2vw;
    border-radius: 20px;
    height: 4vh;
`



export const SectionButtons = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2vh auto;
`