import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "../../GlobalStyled"
import { Button, Inputs, SectionsButtons, Form, Sections, Title } from './styled';
import { Country } from "../../Mockup/Country"
import { NameTripsSelect } from "../../components/NameTrips/NameTripsSelect";





function ApplicationForm() {
  
  const countries = Country.map((country) => {
    return <option key={country.index} value={country.index}>{country}</option>
  })

  


  return (
    <Container>
      <Title>ApplicationForm</Title>
      <Form 
      onSubmit={""}
      >
        <Sections>
          <NameTripsSelect
          required

          />
         
          <Inputs 
            type="text" 
            placeholder="Nome" 
            required
            pattern='^.{4,}'
            title="Mínimo de 4 caracteres"
            />
          <Inputs 
          type="number" 
          placeholder="Idade" 
          required
          pattern='^.{18,}'
          title="Mínimo de 18 anos"
          />
          <Inputs 
          type="text" 
          placeholder="Texto de Candidatura" 
          required
          pattern='^.{30,}'
          title="Mínimo de 30 caracteres"
          />
          <Inputs 
          type="text" 
          placeholder="Profissão" 
          required
          pattern='^.{5,}'
          title="Mínimo de 5 caracteres"
          />
          <select required >
            <option>Escolha um País</option>
            {countries}
          </select>
        </Sections>
        <SectionsButtons>
          <Link to="/ListTrip">
            <Button>voltar</Button>
          </Link>
          <Button>Enviar</Button>

        </SectionsButtons>
      </Form>

    </Container>
  );
}

export default ApplicationForm;
