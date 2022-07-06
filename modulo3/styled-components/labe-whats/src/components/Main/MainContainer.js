import React from 'react'
import {MainContainer,Formulario,Label,Input1,Input2,BotaoEnviar} from './StyleMain.js'


function App() {
  return (
    <MainContainer>
      <Formulario>
        <Label> Remetente: </Label>
        <Input1/>
        <Label> Mensagem: </Label>
        <Input2/>
        <BotaoEnviar>  Enviar Mensagem </BotaoEnviar>
      </Formulario>
      
    </MainContainer>
  )
}

export default App;