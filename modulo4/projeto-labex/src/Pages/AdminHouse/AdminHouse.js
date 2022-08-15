import React from 'react';
import { Container } from '../../GlobalStyled';
import { ListTripSection, SectionsButtons, ButtonDel, Button } from './styled';
import Lixeira from '../../img/lixeira.png';
import { Link } from 'react-router-dom';
function AdminHouse() {
  return (
    <Container>
        <h1>Área Administrativa</h1>
        <SectionsButtons>
          <Link to="/">
          <Button>Voltar</Button>
          </Link>
          <Link to="/CreateTrip">
          <Button>Criar Viagem</Button>
          </Link>
          <Button>Sair</Button>
          <ListTripSection>
            <span>Test</span>
            <ButtonDel>
            <img src={Lixeira} alt="ícone de lixeira" />
            </ButtonDel>

          </ListTripSection>
        </SectionsButtons>
    </Container>
  );
}

export default AdminHouse;
