import styled from 'styled-components'


export const Title = styled.h1`
    height: 10vh;
`

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    margin: 0 auto;

    @media (max-width: 380px) {
            width: 100vw;
    }

`

export const Inputs = styled.input`
    width: 70%;
    height: 27px;
    margin: 0.5vh auto;
    border-radius: 5px;

    
`

export const SectionsButtons = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const Button = styled.button`
    margin: 2vh 1vw;
    `

export const SectionInputs = styled.section`
    display: flex;
    flex-direction: column;
    margin: 25vh auto;
    width: 100%;
    align-items: center;
    
    h1 {
        margin: 0 auto;
        text-align: center;
        font-size: 3.5rem;
        
    }
    `

export const SectionPassword = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0 auto; 
    
    
    
    span {
        margin: 0 auto;
        position: absolute;
        cursor: pointer;
        right: 29vw;
    }
    
    `
    export const InputPassword = styled.input`
        width: 50%;
        height: 27px;
        margin: 0.5vh auto;
        border-radius: 5px;
    `
