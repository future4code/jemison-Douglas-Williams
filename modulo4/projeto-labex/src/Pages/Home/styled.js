import styled from 'styled-components'


export const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 4vh auto;
    width: 80vw;
    height: auto;
    box-shadow: 5px 5px 5px black;
    border-radius: 10px;
    border: 2px solid var(--soft-dark);
    background-color: var(--soft-white);
    padding: 10px;

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