import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyled';
import { Button, Inputs, SectionsButtons } from "./styled";

function Login() {
  return (
    <Container>
        <h1>Login</h1>
        <Inputs type="text" placeholder="Email" />
        <Inputs type="text" placeholder="Password" />
        <SectionsButtons>
          <Link to="/">
          <Button>Voltar</Button>
          </Link>
          <Button>Entrar</Button>
        </SectionsButtons>

    </Container>
  );
}

export default Login;