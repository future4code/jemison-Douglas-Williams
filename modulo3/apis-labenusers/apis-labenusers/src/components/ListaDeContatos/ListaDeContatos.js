import React, {useState, useEffect} from "react"
import {ContainerPai, 
  Display,
  FormAdd,
  ButtonDel, 
  ButtonAdd, 
  ButtonReturn,
  ContatoList,
  ButtonListaDeContatos, 
  IconeProfile} from "../../styled"
import Contatos from "./Contatos"
import axios from "axios"
import Icone from "../../img/icone-contato.png"

function ListaDeContatos() {

  //Estado da Lista de Contatos
  const [listaContatos, setListaContatos] = useState([]);

  //Estado do Input
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value)
  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }

  //Componentizar os itens da lista
  const allUsers = listaContatos.map((listaContato, index) => {
    return (
      <ContatoList key={index}>
        <IconeProfile src={Icone} />
        {listaContato.name}
      </ContatoList>
    )
  })


  //Variáveis da API
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
  const serviceHeaders = {
    headers: {
      Authorization: "douglas-porto-Jemison"
    }   
  }

  // Requisição GET
  const getAllUsers = () => {
    axios.get(url, serviceHeaders)
    .then((response) => console.log(response.data))
    .cath((error) => console.log(error.response.data))
  }

  // PASSO 5: PASSAR O USEEFFECT COM A REQUISIÇÃO GET
        // PARA RENDERIZAR NA TELA AUTOMATICAMENTE
  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <ContainerPai>
        <Display>
          <ul>
            {allUsers}
          </ul>
            
        </Display>
    </ContainerPai>
  );
}

export default ListaDeContatos;