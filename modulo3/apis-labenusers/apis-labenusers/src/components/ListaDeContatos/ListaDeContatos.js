import React, { useState, useEffect } from "react";
import {
  ContainerPai,
  Display,
  Titulo,
  ButtonDel,
  ButtonTransition,
  ContainerList,
  IconeProfile,
  InputSearch,
  Contato,
  ContatoList,
  ButtonSearch
} from "../../styled";
import { url } from "../../constants/index";
import axios from "axios";
import Icone from "../../img/icone-contato.png";
import LixeiraPreta from "../../img/lixeira.png"
import HomeBlack from "../../img/home_black.png"

function ListaDeContatos(props) {
  //Estados
  const [allUsers, setAllUsers] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [filtro, setFiltro] = useState(false);

  const handlePesquisa = (e) => {
    setPesquisa(e.target.value);
  };

  //Variáveis da API
  const serviceHeaders = {
    headers: {
      Authorization: "douglas-porto-jemison",
    },
  };

  // Requisição GET
  const getAllUsers = () => {
    axios
      .get(`${url}`, serviceHeaders)
      .then((response) => {
        setAllUsers(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    if (filtro) {
      setFiltro(!filtro);
    }
  };

  const pesquisaContatos = () => {
    axios
      .get(`${url}/search?name=${pesquisa}&email=`, serviceHeaders)
      .then((response) => {
        setAllUsers(response.data);
        setFiltro(!filtro);
        setPesquisa("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //CRIAÇÃO DA REQUISIÇÃO DELETE
  const deleteUser = (id) => {
    axios
      .delete(`${url}/${id}`, serviceHeaders)
      .then((response) => {
        console.log(response.data);
        alert("Usuário deletado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
        alert("Algo deu errado. Tente novamente!");
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <ContainerPai>
      <Display>
        <ButtonTransition onClick={() => props.mudarTela("start")}>
          Voltar para cadastro de usuários
        <img src={HomeBlack} alt="Icone de Lixeira" />
        </ButtonTransition>
        <Titulo>Lista de Contatos</Titulo>
        {allUsers.map((item) => {
          return (
            <ContainerList>
            <Contato key={item.id}>
              <IconeProfile src={Icone} alt="Icone contato" />
              <ContatoList>{item.name}</ContatoList>
              <ButtonDel onClick={() => deleteUser(item.id)}>
                <img src={LixeiraPreta} alt="Icone de Lixeira" />
              </ButtonDel>
            </Contato>
            </ContainerList>
          );
        })}
        <h2>Pesquisar usuários</h2>
        <InputSearch
          placeholder="Nome"
          value={pesquisa}
          onChange={handlePesquisa}
        />
        {filtro ? (
        <button onClick={() => getAllUsers()}>Voltar</button>
      ) : (
        <ButtonSearch onClick={() => pesquisaContatos(pesquisa)}>
          Pesquisar
        </ButtonSearch>
      )}
      </Display>
    </ContainerPai>
  );
}

export default ListaDeContatos;