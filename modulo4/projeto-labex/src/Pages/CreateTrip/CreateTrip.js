import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyled';
import { Inputs, Form, Sections } from '../ApplicationForm/styled';
import { Title, Select, Button, SectionButtons } from "./styled"
import { Planet } from "../../Mockup/Planet";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm"
import axios from 'axios';
import { Base_url, headers } from "../../constants/index"

function CreateTrip() {
  useProtectedPage();
  const {form, onChange, clear} = useForm({
    name: "", 
    planet: "",
    date: "",
    decription: "",
    durationInDays: ""
  })

  

  const createTrip = (e) => {
    e.preventDefault()
  
    axios.post(`${Base_url}trips`, form, headers)
    .then((response) => {
      clear();
      alert("Viagem cadastrada com sucesso")
      console.log(response.data)
    }).catch((err) => {
      alert("Viagem não cadastrada")
      console.log(err)
    })
  }

  //Mapeamento do mock de dados para o formulário
  const planets = Planet.map((planet) => {
    return <option key={planet.index} value={planet.index}>{planet}</option>
  })




  return (
    <Container>
      <Title>Criar Viagem</Title>
        <Form 
        onSubmit={createTrip}
        >
          <Sections>
          <Inputs 
          type="text" 
          name="name"
          value={form.name}
          onChange={onChange}
          placeholder="Nome da viagem" 
          required
          pattern='^.{4,}'
          title="Mínimo de 4 caracteres"
          />

          <Select
          name="planet"
          value={form.planet}
          onChange={onChange}
          required
          >
            <option value="" disabled selected>Selecione um planeta</option>
            {planets}
          </Select>
          <Inputs
          name='date'
          type="date"
          value={form.date}
          onChange={onChange}
          required
          pattern="new Date().toISOString().split('T',1)[0]"
          
          />
          <Inputs 
          name='description'
          type="text" 
          placeholder="Descrição"
          value={form.description}
          onChange={onChange} 
          required
          pattern='^.{20,}'
          title="Mínimo de 20 caracteres"
          />
          <Inputs 
          name='durationInDays'
          type="number" 
          placeholder="Duração em anos" 
          value={form.durationInDays}
          onChange={onChange}
          title="Mínimo 100 anos"
          />
      </Sections>
      <SectionButtons>

        <Button type="submit">Criar</Button>

      </SectionButtons>

          </Form>
        <Link to="/AdminHouse">
          <Button
          type="button"
          >Voltar</Button>
        </Link>

    </Container>
  );
}

export default CreateTrip;