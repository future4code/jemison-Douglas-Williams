import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../GlobalStyled';
import { Inputs, Form, Sections } from '../ApplicationForm/styled';
import { Title, Select, Button, SectionButtons } from "./styled"
import { Planet } from "../../Mockup/Planet";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useForm } from "../../hooks/useForm"
import axios from 'axios';
import { Base_url, HeadersCreateTrips } from "../../constants/index"

function CreateTrip() {
  useProtectedPage();
  const [form, onChange, clear] = useForm({
    name: "", 
    planet: "",
    date: "",
    decription: "",
    durationInDays: ""
  })

  const createTrip = (e) => {
    e.preventDefault()

    const body = {
      name:form.name,
      planet: form.planet,
      date: form.date,
      decription: form.description,
      durationInDays: form.durationInDays
    }
    console.log(body)
    axios.post(`${Base_url}/trips`, body, HeadersCreateTrips)
    .then((response) => {
      alert("Viagem cadastrada com sucesso")
      clear();
    }).catch((err) => {
      alert("Viagem não cadastrada")
      console.log(err)
    })
  }

  //Mapeamento do mock de dados para o formulário
  const planets = Planet.map((planet) => {
    return (
      <Select>
        <option>Escolha um Planeta</option>
        <option key={planet.index} value={planet.index}>{planet}</option>
      </Select>
    )
  })




  return (
    <Container>
      <Title>Criar Viagem</Title>
        <Form 
        onSubmit={""}
        >
          <Sections>
          <Inputs 
          id='name'
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
          id='planets'
          name='planets'
          type='select'
          value={form.planet}
          onChange={onChange}
          required>
            
            {planets}
          </Select>

          <Inputs
          id='date' 
          name='date'
          type="date"
          value={form.date}
          onChange={onChange}
          required
          pattern="new Date().toISOString().split('T',1)[0]"
          
          />
          <Inputs 
          id='description'
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
          id='number'
          name='number'
          type="number" 
          placeholder="Duração em anos" 
          value={form.durationInDays}
          onChange={onChange}
          title="Mínimo 100 anos"
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