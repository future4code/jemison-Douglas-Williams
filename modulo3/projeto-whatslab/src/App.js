import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";
import MainContainer  from "./components/Main/MainContainer.js";
import Header from "./components/Header/Header.js";
import LateralDireita from "./components/LateralDireita/LateralDireita.js";
import LateralEsquerda from "./components/LateralEsquerda/LateralEsquerda.js";
import Footer from "./components/Footer/Footer.js";
import SectionMensagens from "./components/SectionMensagens/SectionMensagens.js";
import {
  SuperContainer,
  Container,
  ContainerCentro,
  ContainerFilho,
} from "./style.js";

const Form = styled.form`
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
`

function App() {
  const [inputName, setInputName] = useState("");
  const [inputMensage, setInputMensage] = useState("");
  const [sectionMensagens, setSectionMensagens] = useState([
    {
      nome: String,
      mensagem: String,
    },
  ]);

  // eventos
  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputMensage = (e) => {
    setInputMensage(e.target.value);
  };

  // adicionar Mensagem

  const addMensage = (e) => {
    e.preventDefault();

    const mensage = { nome: inputName, mensagem: inputMensage };
    const newMensage = [...sectionMensagens, mensage];
    setSectionMensagens(newMensage);
    setInputName('')
    setInputMensage('')
  };

  const newChat = sectionMensagens.map((elemento, index) => {
    return (
      <SectionMensagens 
        key={index}
        nome={elemento.nome}
        mensagem={elemento.mensagem}
      />
    )
  })

  return (
    <SuperContainer>
      <Header />

      <Container>
        <LateralEsquerda />

        <ContainerFilho>
          <ContainerCentro>
            
            <MainContainer>
              {newChat}
              <SectionMensagens>
                
              </SectionMensagens>
            </MainContainer>
            <Form>
                <label>Nome:</label>
                <input 
                  className='input1'
                  placeholder="Nome"
                  value={inputName}
                  onChange={handleInputName}
                />

                <label> Mensagem:</label>
                <input
                  className='input2'
                  placeholder="Mensagem"
                  value={inputMensage}
                  onChange={handleInputMensage}
                />
                <button onClick={addMensage}>Enviar</button>
              </Form>
          </ContainerCentro>
        </ContainerFilho>

        <LateralDireita />
      </Container>
      <Footer />
    </SuperContainer>
  );
}

export default App;
