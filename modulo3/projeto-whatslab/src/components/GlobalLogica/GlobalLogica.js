import React, { useState } from "react";
import "../../App.css";
import Header from "../Header/Header.js";
import LateralDireita from "../LateralDireita/LateralDireita.js";
import LateralEsquerda from "../LateralEsquerda/LateralEsquerda.js";
import Footer from "../Footer/Footer.js";
import {SuperContainer, Container, ContainerCentro, ContainerFilho} from "../../style";
import {Form, SectionMensage} from "./StyleGlobalLogica"

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
    setInputName("");
    setInputMensage("");
  };

  const newChat = sectionMensagens.map((elemento, index) => {
    return (
      <sectionMensagens key={index}>
        <h1>{elemento.nome}</h1>
        <p>{elemento.mensagem}</p>
      </sectionMensagens>
    );
  });

  return (
    <SuperContainer>
      <Header />

      <Container>
        <LateralEsquerda />

        <ContainerFilho>
          <ContainerCentro>
            <SectionMensage>
              {newChat}
            </SectionMensage>
            <Form>
              <label>Nome:</label>
              <input
                className="input1"
                placeholder="Nome"
                value={inputName}
                onChange={handleInputName}
              />

              <label> Mensagem:</label>
              <input
                className="input2"
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

// export default GlobalLogica;
// /*  Experimento para teste
//  <ContainerListaMensagens>
//         <TextoSemMensagem>*Envie uma mensagem*</TextoSemMensagem>
//         <ListaMensagem>
//           <Button>
//             <img src={lixeira} alt="Imagem de uma Lixeira" />
//           </Button>
//           <Nome>

//             {props.nomeUsuario}
//           </Nome>
//           <TextoComMensagem>{props.mensagem}</TextoComMensagem>
//         </ListaMensagem>
//       </ContainerListaMensagens> */
