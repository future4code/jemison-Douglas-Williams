import React from 'react';
import './App.css'
import {ContainerPai,Titulo,Header,
        LateralEsquerda,LateralDireita,
        Input,Footer} from './style'
import logo from './img/featured_channel.png'

function App() {
  return (
    <div>
      <Header>
          <img src={logo} alt="Logo LabZap"/>
          <Titulo> LabZap </Titulo>
      </Header>
      <ContainerPai>
        <LateralEsquerda/>
        <LateralDireita/>
      </ContainerPai>
      <Input>
        Remetente: 
      </Input>
      <Footer>
        Copyright ® 2022 Douglas Williams All rights reserved R. Vicent Paulo kunitz, 35, Limeira Baixa Brusque-SC CEP  88356-088
      </Footer>
    </div>
  );
}

export default App;
