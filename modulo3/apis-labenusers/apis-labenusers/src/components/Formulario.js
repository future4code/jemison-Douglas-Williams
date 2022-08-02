import axios from "axios";
import React, { useState } from "react";
import {url} from "../constants/index"
import {
  ContainerPai,
  Display,
  FormAdd,
  Label,
  Input,
  Button
} from "../styled";

function Formulario(props) {
  //Estado do Input
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");

  const handleInputName = (e) => {
    setInputName(e.target.value)
  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
  }

  //Variáveis da API
  const serviceHeaders = {
    headers: {
      Authorization: "douglas-porto-jemison"
    }   
  }

    // PASSO 10: CRIAÇÃO DA REQUISIÇÃO POST
  const body = {
    "name": inputName,
    "email": inputEmail
  }

  const postCreateUser = (e) => {
    e.preventDefault();

    axios
    .post(`${url}`, body, serviceHeaders)
    .then((response) =>{
      console.log(response.data)
      setInputName(response.data)
      setInputEmail(response.data)
      alert("Usuário cadastrado com sucesso")
    })
    .catch((error) =>{
      console.log(error)
      alert("Tente novamente :(")
    })

    setInputName("")
    setInputEmail("")
  }

   
  return (
    <ContainerPai>
      
      <Display>
        <button onClick={() => props.mudarTela("list")}>
        Ir para lista de contatos ->
        </button>
        <FormAdd>
          <Label>
            <Input
              placeholder="Insira seu nome"
              type="text"
              value={inputName}
              onChange={handleInputName}
            />
          </Label>

          <Label>
            <Input
              placeholder="Insira seu e-mail"
              type="email"
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </Label>

          <Button
            onClick={postCreateUser}
          > Adicionar </Button>
        </FormAdd>
      </Display>
    </ContainerPai>
  );
}

export default Formulario;
