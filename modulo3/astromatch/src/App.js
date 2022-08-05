import React, { useState } from 'react'
import HomePage from "./components/Pages/HomePage/HomePage"
import ListMatches from "./components/Pages/ListMatches/ListMatches"
import { ContainerPai, GlobalStyle } from "./GlobalStyle";



function App() {
  const [screen, setScreen] = useState('start')

  const changeScreen = (screen) => {
    setScreen(screen)

  }

  const renderScreen = () => {
    switch (screen) {
      case "start":
        return <HomePage changeScreen={changeScreen} />
      case ('list'):
        return <ListMatches changeScreen={changeScreen} />
      default:
        return null;
    }
  }
  

  return (
    <ContainerPai>
      <GlobalStyle />
      {renderScreen()}
      <ListMatches />
    </ContainerPai>
  );
}

export default App;
