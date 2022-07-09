import React from "react";
// import lixeira from "../../img/lixeira.png";

import {
  ContainerMensagem,
  // ContainerListaMensagens,
  // ListaMensagem,
  // TextoSemMensagem,
  // Button,
  TextoComMensagem,
  Nome,
} from "./StyleSectionMensagens.js";

function App(props) {
  return (
    <ContainerMensagem>
      <Nome>
        {props.nome}
        Oi:
      </Nome>
      <TextoComMensagem>
        {props.mensagem}
        Tudo bem? jhdkfjshfkjfs bjhsfihjkf
      </TextoComMensagem>


      {/* <ContainerListaMensagens>
        <TextoSemMensagem>*Envie uma mensagem*</TextoSemMensagem>
        <ListaMensagem>
          <Button>
            <img src={lixeira} alt="Imagem de uma Lixeira" />
          </Button>
          <Nome>
      
            {props.nomeUsuario}
          </Nome>
          <TextoComMensagem>{props.mensagem}</TextoComMensagem> 
        </ListaMensagem>
      </ContainerListaMensagens> */}
    </ContainerMensagem>
  );
}

export default App;
