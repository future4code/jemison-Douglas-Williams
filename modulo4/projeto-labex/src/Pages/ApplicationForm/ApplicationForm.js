import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "../../GlobalStyled"
import { Button, Inputs, SectionsButtons, Form, Sections, Title } from './styled';
import { Country } from "../../Mockup/Country"
import { NameTripsSelect } from "../../components/NameTrips/NameTripsSelect";
import { useForm } from "../../hooks/useForm"
import { Base_url, headers } from "../../constants/index"
import axios from 'axios';


function ApplicationForm() {

  const { form, onChange, clear } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
    trip: ""
  })



  const applicationTrip = (e, id) => {
    e.preventDefault()

    axios.post(`${Base_url}trips/${id}/apply`, form, headers)
      .then((response) => {
        localStorage.setItem("id", response.data.trips)
        clear();
        alert("Solicitação enviada!")
        console.log(response.data)
      }).catch((err) => {
        alert("Solicitação não enviada")
        console.log(err)
      })
  }

  const countries = Country.map((country) => {
    return <option key={country.index} value={country.index}>{country}</option>
  })




  return (
    <Container>
      <Title>Formulário de inscrição</Title>
      <Form
        onSubmit={applicationTrip}
      >
        <Sections>

          <Inputs
            name='name'
            type="text"
            placeholder="Nome"
            value={form.name}
            onChange={onChange}
            required
            pattern='^.{4,}'
            title="Mínimo de 4 caracteres"
          />
          <Inputs
            name='age'
            type="number"
            placeholder="Idade"
            value={form.age}
            onChange={onChange}
            required
            pattern='^.{18,}'
            title="Mínimo de 18 anos"
          />
          <Inputs
            name='applicationText'
            type="text"
            placeholder="Texto de Candidatura"
            value={form.applicationText}
            onChange={onChange}
            required
            pattern='^.{30,}'
            title="Mínimo de 30 caracteres"
          />
          <Inputs
            name='profession'
            type="text"
            placeholder="Profissão"
            value={form.profession}
            onChange={onChange}
            required
            pattern='^.{5,}'
            title="Mínimo de 5 caracteres"
          />
          <select
            name='country'
            value={form.country}
            onChange={onChange}
            required >
            <option>Escolha um País</option>
            {countries}
          </select>
          <NameTripsSelect
            name='trip'
            value={form.trip}
            onChange={onChange}
            required

          />
        </Sections>
        <SectionsButtons>
          <Link to="/ListTrip">
            <Button>voltar</Button>
          </Link>
          <Button type="submit">Enviar</Button>

        </SectionsButtons>
      </Form>

    </Container>
  );
}

export default ApplicationForm;
