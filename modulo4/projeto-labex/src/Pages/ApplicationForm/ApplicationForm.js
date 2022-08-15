import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from "../../GlobalStyled"
import { Button, Inputs, SectionsButtons, Form, Sections } from './styled';
import {Country} from "../../Mockup/Country"

function ApplicationForm() {

  const countries = Country.map((country) => {
    return <option key={country.index} value={country.index}>{country}</option>
  })


  return (
    <Container>
        <h1>ApplicationForm</h1>
        <Sections>
        <Form>
        <Inputs type="text" placeholder="Escolha uma viagem" />
        <Inputs type="text" placeholder="Nome" />
        <Inputs type="number" placeholder="Idade" />
        <Inputs type="text" placeholder="Texto de Candidatura" />
        <Inputs type="text" placeholder="Profissão" />
        <select >
          <option>Escolha um País</option>
          {countries}
        </select>
        </Form>
        </Sections>
      <SectionsButtons>
        <Link to="/ListTrip">
        <Button>voltar</Button>
        </Link>
        <Button>Enviar</Button>
        
      </SectionsButtons>
    
    </Container>
  );
}

export default ApplicationForm;
