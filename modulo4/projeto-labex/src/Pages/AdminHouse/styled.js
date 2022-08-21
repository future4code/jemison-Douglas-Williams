import styled from 'styled-components'




export const Title = styled.h1`
    margin-top: 25vh;

    @media (max-width: 950px) {
        font-size: 9vh;
    }
    @media (max-width: 830px) {
        font-size: 8vh;
    }
    @media (max-width: 730px) {
        font-size: 7vh;
    }
    @media (max-width: 640px) {
        font-size: 6vh;
    }
    @media (max-width: 550px) {
        font-size: 5vh;
    }
    @media (max-width: 450px) {
        font-size: 4vh;
    }
    @media (max-width: 360px) {
        font-size: 3vh;
    }
`

export const ListTripSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0 auto;
    width: 90%;
    height: auto;
    border: 2px solid var(--soft-dark);

    span {
        font-weight: bold;
        margin-left: 1vw;
    }

`

export const Button = styled.button`
    margin: 0 1vw 2vh ;

    @media (max-width: 460px) {
        font-size: 1.5vh;
        width: 80px;
        height: 5vh;
    }
`

export const SectionsButtons = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 3vh;

`

export const ButtonDel = styled.button`
    margin: 0 1vw 0 auto;
    background-color: transparent;
    border: none;
    width: 3vw;

    @media (max-width: 600px) {
        margin-right: 3vw;
    }
    @media (max-width: 400px) {
        margin-right: 5vw;
    }

`
