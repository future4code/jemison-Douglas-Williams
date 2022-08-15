import styled from 'styled-components'


export const HomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 24vh auto;
    width: 50vw;
    height: 50vh;;
    box-shadow: 5px 5px 5px black;
    border-radius: 10px;
    border: 2px solid var(--soft-black);
    background-color: var(--soft-white);


`

export const HomeSection = styled.section`
    display: flex;
    justify-content: space-around;
`

export const HomeTitle = styled.h1`
    margin: 20vh auto 5vh auto;

`

export const HomeButton = styled.button`
    margin: 0 5vw 25vh 5vw;
    align-items: center;

`