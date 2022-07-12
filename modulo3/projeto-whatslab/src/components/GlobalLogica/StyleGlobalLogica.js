import styled from 'styled-components'
import "../../App.css"

export const SectionMensage = styled.section`
    height: 80vh;
    width: 60vw;
    border: 2px solid orange;
    border-radius: 10px;


`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vw;

  .input1 {
    padding: 5px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 20%;
  }

  .input2 {
    padding: 5px 5px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    width: 70%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 7px;
    background-color: orange;
    width: 10vw;
  }

  button:hover {
    cursor: pointer;
    color: white;
  }
`;

















// Para testes


// export const ListaMensagem = styled.li`
//     list-style: none;
// `
// export const ContainerListaMensagens = styled.ul`

// `

// export const TextoSemMensagem = styled.p`
    
//     /* margin: auto auto 0 auto; */
// `
// export const Button = styled.button`
//     cursor: pointer;
//     border: none;
//     background-color: transparent;
// `
// export const Nome = styled.h1`
//     display: flex;

// `
// export const TextoComMensagem = styled.p`

// `


// export const button = styled.button`
//     float: right;
//     width: 2vw;
//     height: 2vh;
//     background-size: 30px;
//     background-position: center;
//     background-repeat: no-repeat;
//     border-radius: 100%;
//     cursor: pointer;

// `
