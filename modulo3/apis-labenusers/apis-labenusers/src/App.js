import React, {useState} from "react"
import Formulario from "./components/Formulario"
import ListaDeContatos from "./components/ListaDeContatos/ListaDeContatos"

function App() {
  const [tela, setTela] = useState("start")

  const mudarTela = (tela) =>{
    setTela(tela)
}

  //Função de acordo com 
  const renderizarTela = () => {
    switch (tela) {
        case "start":
            return <Formulario mudarTela={mudarTela}/>
        case "list":
            return <ListaDeContatos mudarTela={mudarTela} />  
        default:
            return null;      
    }
}
  return (
    <div>
      {/* <Formulario /> */}
      {renderizarTela()}
      {/* <ListaDeContatos /> */}
    </div>
  );
}

export default App;
