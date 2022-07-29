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
    height: 40vh;
    width: 80vw;
    margin: 30vh auto;
`

export const InputNomeUsuario = styled.input`
    display: flex;
    align-items: center;
    border: 1px solid blue;
    border-radius: 10px;
    margin: 0 0 0 1vw;
    width: 40vw;

`
export const InputEmailUsuario = styled.input`
    display: flex;
    align-items: center;
    border: 1px solid blue;
    border-radius: 10px;
    margin: 0 0 0 1vw;
    width: 40vw;

`
export const Label = styled.label`
    display: flex;

`
export const FormAdd = styled.form`

`

export const ButtonAdd = styled.button`
    border-radius: 10px;
    height: 3vh;
    width: 20vw;
`

// Lista de Contatos
export const ButtonDel = styled.button`
    border-radius: 10px;
    
`
export const ButtonReturn = styled.button`
    border-radius: 10px;
    height: 3vh;
    width: 20vw;
`

export const ButtonListaDeContatos = styled.a`

`

export const ContatoList = styled.li`
    display: flex;
    align-items: center;

    list-style: none;
    text-align: left;
    font-weight: bold;
`
export const IconeProfile = styled.img`
    margin: 5px;
    
    width: 1.4vw;
`