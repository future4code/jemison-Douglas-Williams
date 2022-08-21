import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyled';
import { Inputs, Form, Sections } from '../ApplicationForm/styled';
import { Title, Button, SectionButtons } from "./styled"
import { Planet } from "../../Mockup/Planet";
import { useProtectedPage } from "../../hooks/useProtectedPage";



function CreateTrip() {
  useProtectedPage();

  //Mapeamento do mock de dados para o formulário
  const planets = Planet.map((planet) => {
    return <option key={planet.index} value={planet.index}>{planet}</option>
  })


  return (
    <Container>
      <Title>Criar Viagem</Title>
        <Form 
        onSubmit={""}
        >
          <Sections>
          <Inputs 
          type="text" 
          placeholder="Nome" 
          required
          pattern='^.{4,}'
          title="Mínimo de 4 caracteres"
          />
          <select
          required
          >
            <option>Escolha um Planeta</option>
            {planets}
          </select>
          <Inputs 
          type="date" 
          placeholder="" 
          required
          
          />
          <Inputs 
          type="text" 
          placeholder="Descrição" 
          required
          pattern='^.{20,}'
          title="Mínimo de 20 caracteres"
          />
          <Inputs 
          type="number" 
          placeholder="Duração" 
          required
          pattern='^.{20,}'
          title="Mínimo de 20 caracteres"
          />
      </Sections>
      <SectionButtons>
        <Link to="/AdminHouse">
          <Button
          type="button"
          >Voltar</Button>
        </Link>

        <Button>Criar</Button>

      </SectionButtons>

          </Form>

    </Container>
  );
}

export default CreateTrip;