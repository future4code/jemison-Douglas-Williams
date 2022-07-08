import React from 'react';
import './App.css'
import Header from './components/Header/Header.js'
import Main from './components/Main/MainContainer.js'
import LateralDireita from './components/LateralDireita/LateralDireita.js'
import LateralEsquerda from './components/LateralEsquerda/LateralEsquerda.js'
import Footer from './components/Footer/Footer.js'
import SectionMensagens from './components/SectionMensagens/SectionMensagens.js'
import {ContainerPai,ContainerCentro, ContainerFilho} from './style.js'

function App() {
  return (
    <ContainerPai>
      <Header/>

      <ContainerFilho>
        <LateralEsquerda/>
        <ContainerCentro>
          
          <SectionMensagens/>
          <Main/>

        </ContainerCentro>
        <LateralDireita/>
      </ContainerFilho>
      <Footer/>
    </ContainerPai>
  );
}

export default App;
