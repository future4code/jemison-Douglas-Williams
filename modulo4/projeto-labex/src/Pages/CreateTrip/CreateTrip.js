import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyled';
import { Inputs, Form, Sections } from '../ApplicationForm/styled';
import { Section, Button } from "./styled"
import { Planet } from "../../Mockup/Planet";




function CreateTrip() {

  const planets = Planet.map((planet) => {
    return <option key={planet.index} value={planet.index}>{planet}</option>
  })


  return (
    <Container>
      <h1>Criar Viagem</h1>
      <Sections>
        <Form>
          <Inputs type="text" placeholder="Nome" />
          <select>
            <option>Escolha um Planeta</option>
            {planets}
          </select>
          <Inputs type="date" placeholder="" />
          <Inputs type="text" placeholder="Descrição" />
          <Inputs type="number" placeholder="Duração" />
        </Form>
      </Sections>
      <Section>
        <Link to="/AdminHouse">
          <Button>voltar</Button>
        </Link>

        <Button>Criar</Button>

      </Section>


    </Container>
  );
}

export default CreateTrip;