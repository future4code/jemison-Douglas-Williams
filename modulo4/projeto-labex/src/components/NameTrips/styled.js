import styled from "styled-components";



// Estilização para NameTripsSelect
export const ContainerSelect = styled.select`
    
`
export const OptionNameTrip = styled.option`

`

// Estilização para NameTripsAdminHouse
export const Container = styled.section``

export const ListTripSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2vh auto;
    width: 60vw;
    height: 5vh;
    border: 2px solid var(--soft-dark);

    span {
        font-weight: bold;
        margin-left: 1vw;
        text-decoration: transparent;

    }

    .link {
        text-decoration: none;
        font-weight: bold;
        color: black;
        margin-left: 2vw;

        :hover {
            transform: scale(1.1);
        }

        :active {
            transform: scale(1.0);

        }
    }

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
