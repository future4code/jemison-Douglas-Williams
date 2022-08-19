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

export const ListTripsSectionButtons = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 3vh;
`

export const ListTripsTitle = styled.h1`

`

export const ListTripsButton = styled.button`
    margin: 0 5vw;
    align-items: center;
`

export const LabelTrips = styled.span`

`

export const InfoTrips = styled.p`

`

export const TripContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 550px;
    height: 250px;
    box-shadow: 5px 5px 6px 4px #A6A6A6;
    margin: 20px;

    p {
        color: #62707F;
        font-size: 1.2em;
        font-weight: 600;
        padding: 0 25px;
        text-align: center;
    }

    span {
        line-height: 1.5;
        font-weight: 500;
        margin: 0 -20px;
    }
`