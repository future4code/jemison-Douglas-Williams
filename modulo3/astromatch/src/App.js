import React from 'react'
import Router from './components/Router/Router';
import { ContainerPai, GlobalStyle } from "./GlobalStyle";



function App() {

  return (
    <ContainerPai>
      <GlobalStyle />

      <Router />
    
    </ContainerPai>
  );
}

export default App;
