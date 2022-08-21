import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Title, Button, Inputs, SectionsButtons, SectionInputs, SectionPassword, Container } from "./styled";
import { Form } from "../ApplicationForm/styled"
import axios from 'axios';
import { Base_url, serviceHeaders } from '../../constants';
import { useForm } from "../../hooks/useForm";


function Login() {
  const [form, onChange] = useForm({ email: "", password: "" })


  const login = (e) => {
    e.preventDefault() //evita que a página seja renderizada novamente ao enviar o formulário
    axios.post(`${Base_url}login`, form)
      .then(response => {
        localStorage.setItem("token", response.data.token)
        window.location.href = "/AdminHouse"
      }).catch(error => {
        console.log(error.response)

      })
  }

  


  return (
    <Container>
      <SectionInputs>
        <Title> Login </Title>
        <Form
          onSubmit={login}
        >

          <Inputs 
            id='email' //colocar igual ao htmlFor do label
            name='email' //colocar igual a propriedade que está no estado inicial do useForm!!!!!!
            type="email" //faz validações de e-mail
            placeholder="E-mail"
            value={form.email}
            onChange={onChange}
            required //torna campo obrigatório
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <SectionPassword>
            <Inputs
              id='password'
              name='password'
              type='password'
              placeholder="Senha"
              value={form.password}
              onChange={onChange}
              required
              pattern='^.{3,}'
              title="Mínimo de 3 caracteres"
            />
            
          </SectionPassword>
          <SectionsButtons>
            <Link to="/">
              <Button
                type="button"
              >Voltar</Button>
            </Link>

            <Button>Entrar</Button>
          </SectionsButtons>
        </Form>
      </SectionInputs>

    </Container>
  );
}

export default Login;