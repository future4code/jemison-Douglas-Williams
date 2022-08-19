import styled from 'styled-components'

export const Inputs = styled.input`
    width: 50%;
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
        right: 31vw;
    }
    
    `
    export const InputPassword = styled.input`
        width: 50%;
        height: 27px;
        margin: 0.5vh auto;
        border-radius: 5px;
    `

    export const EyeButton = styled.button`
        background-color: transparent;
        height: 27px;
        width: 27px;
        margin: 0 auto;
        position: absolute;
        cursor: pointer;
        right: 31vw;
        border: none;

        :active {
            background-image: url();
            background-repeat: no-repeat;
            background-position: center;
            background-size: 100%;
            width: 6px;
        }

    `