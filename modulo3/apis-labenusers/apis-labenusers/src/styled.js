import styled from "styled-components"


// Formulário
export const ContainerPai = styled.div`
`

export const Display = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    height: auto;
    width: 90vw;
    margin: 30vh auto;
`


export const Input = styled.input`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 5px;
    margin: 0.5vh auto;
    width: 80vw;
    height: 20px;

`
export const Label = styled.label`
    display: flex;

`
export const FormAdd = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin: 10vh;

`

export const Button = styled.button`
    border-radius: 10px;
    text-align: center;
    height: 5vh;
    width: 20vw;
    margin: 2vh auto;
    cursor: pointer;
    font-size: clamp(1.2em, 1em + 3vh, 1.5em);
    background-color: black;
    border: black;
    color: white;



    :hover {
        color: black;
        background-color: white;
        border: white;
    }
`

export const ButtonSearch = styled.button`
    border-radius: 10px;
    text-align: center;
    height: 5vh;
    width: 10vw;
    margin: 2vh auto;
    cursor: pointer;
    font-size: clamp(0.5em, 1em + 2vh, 1.2em);
    background-color: black;
    border: black;
    color: white;



    :hover {
        color: black;
        background-color: white;
        border: white;
    }
`

// Lista de Contatos

export const Titulo = styled.h1`

`

export const ButtonDel = styled.button`
    border-radius: 10px;
`
export const ButtonReturn = styled.button`
    border-radius: 10px;
    height: 3vh;
    width: 20vw;
    background-color: transparent;
    border: transparent;
    cursor: pointer;

    :hover {
        color: white;
    }
`

export const ButtonListaDeContatos = styled.a`
    cursor: pointer;
    margin-top: 2vh;

    :hover {
        color: white;

    }
`

export const ContatoList = styled.li`
    display: flex;
    align-items: center;

    list-style: none;
    text-align: left;
    font-weight: bold;
`

export const Contato = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 10vh;
    width: 30vw;
`

export const IconeProfile = styled.img`
    margin: 5px;
    width: 1.4vw;
`

export const ContainerList = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    padding:10px;
    border-radius:10px;
    box-shadow: 2px 2px 5px 2px black;

    margin: 2vh auto;

    button{
        cursor:pointer;
        border-radius:10px;
        margin: 0 0 0 auto;

    }

    button:hover{
        background-color:red;
        border-color: red;
        color: white;
    }

`

export const DisplayContatos = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 2px solid black;
    border-radius: 10px;
    height: 20vh;
    width: 45vw;
    margin: 0 auto;
`

export const InputSearch = styled.input`
    background-color: black;
    color: white;
    border-color: black;
    border-radius: 10px;
    margin-bottom: 2vh;
    width: 20vw;
`
