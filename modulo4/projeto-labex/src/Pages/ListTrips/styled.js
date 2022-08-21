import styled from 'styled-components'


export const ListTripSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 2vh;
    width: auto;
    height: auto;
    border: 3px solid var(--soft-dark);
    border-radius: 10px;
    box-shadow: 5px 5px 5px black;
    padding: 10px;


    span {
        font-weight: bold;
    }

`

export const ListTripsSectionButtons = styled.section`
    display: flex;
    justify-content: space-around;
    margin-top: 3vh;
`

export const ListTripsTitle = styled.h1`
    margin-top: 2vh;

    @media (max-width: 750px) {
        font-size: 8vh;
    }
    @media (max-width: 600px) {
        font-size: 6vh;
    }
    @media (max-width: 500px) {
        font-size: 5vh;
    }
    @media (max-width: 400px) {
        font-size: 4vh;
    }
    @media (max-width: 320px) {
        font-size: 3vh;
    }
    @media (max-width: 280px) {
        font-size: 2.5vh;
    }
`

export const ListTripsButton = styled.button`
    margin: 0 5vw;
    align-items: center;
`

