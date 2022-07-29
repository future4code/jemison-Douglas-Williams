import React, { useState } from "react";
import {
  ContainerPai,
  Display,
  FormAdd,
  Label,
  InputNomeUsuario,
  InputEmailUsuario,
  ButtonAdd,
  ButtonListaDeContatos,
} from "../styled";

function Formulario() {
   //Estado do Input
   const [inputName, setInputName] = useState("");
   const [inputEmail, setInputEmail] = useState("");
 
   const handleInputName = (e) => {
     setInputName(e.target.value)
   }
 
   const handleInputEmail = (e) => {
     setInputEmail(e.target.value)
   }

   const body = {
    "name": inputName,
    "email":
     inputEmail,
   }

   const postCreateUser = (e) 
  return (
    <ContainerPai>
      <Display>
        <FormAdd>
          <Label>
            Nome:
            <InputNomeUsuario 
            placeholder="Insira seu nome" 
            type="text" 
            value={inputName}
            onChange={handleInputName}
            />
          </Label>

          <Label>
            E-mail:
            <InputEmailUsuario 
            placeholder="Insira seu e-mail" 
            type="email" 
            value={inputEmail}
            onChange={handleInputEmail}
            />
          </Label>

          <ButtonAdd
          onClick={}
          > Adicionar Contato </ButtonAdd>
        </FormAdd>
      </Display>
    </ContainerPai>
  );
}

export default Formulario;
