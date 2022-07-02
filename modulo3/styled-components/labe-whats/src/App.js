import React from 'react';
import './App.css'
import Header from './components/Header/Header.js'
import Main from './components/Main/MainContainer.js'
import LateralDireita from './components/LateralDireita/LateralDireita.js'
import LateralEsquerda from './components/LateralEsquerda/LateralEsquerda.js'
import Footer from './components/Footer/Footer.js'
import {ContainerPai,ContainerCentro} from './style.js'

function App() {
  return (
    <ContainerPai>
      <Header/>
      <ContainerCentro>
        <LateralEsquerda/>

        <Main/>

        <LateralDireita/>
      </ContainerCentro>
      
      <Footer/>
    </ContainerPai>
  );
}

export default App;
