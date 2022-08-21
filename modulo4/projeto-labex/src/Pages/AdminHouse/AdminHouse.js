import React from 'react';
import { Container } from '../../GlobalStyled';
import { Title, ListTripSection, SectionsButtons, ButtonDel, Button } from './styled';
import Lixeira from '../../img/lixeira.png';
import { Link } from 'react-router-dom';
function AdminHouse() {
  return (
    <Container>
        <Title>Área Administrativa</Title>
        <SectionsButtons>
          <Link to="/">
          <Button>Voltar</Button>
          </Link>
          <Link to="/CreateTrip">
          <Button>Criar Viagem</Button>
          </Link>
          <Button>Sair</Button>
          
        </SectionsButtons>
        <ListTripSection>
            <span>Test</span>
            <ButtonDel>
            <img src={Lixeira} alt="ícone de lixeira" />
            </ButtonDel>

          </ListTripSection>
    </Container>
  );
}

export default AdminHouse;
