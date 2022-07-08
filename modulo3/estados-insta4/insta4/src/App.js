import React, { useState } from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  label {
    //screen reader only
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: 10px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
    
  }

  input {
    padding: 5px 60px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 5px;
    width: 60%;
  }

  button {
    border: none;
    border-radius: 10px;
    padding: 7px 60px;
    background-color: lightblue;
    margin-bottom: 10px;
  }

  button:hover {
    background-color: orangered;
    cursor: pointer;
    color: white;
    -webkit-transition: all 100ms ease-in-out;
    box-shadow: 0 0 3px 3px inset white;
  }
`

function App() {
  const [inputNome, setInputNome] = useState('');
  const [inputFotoUsuario, setInputFotoUsuario] = useState('');
  const [inputFotoPost, setInputFotoPost] = useState('');

  const [post, setPost] = useState([
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/210/150",
    },
  ]);

  // eventos
  const handleInputNome = (e) => {
    setInputNome(e.target.value);
  };

  const handleInputFotoUsuario = (e) => {
    setInputFotoUsuario(e.target.value);
  };

  const handleInputFotoPost = (e) => {
    setInputFotoPost(e.target.value);
  };

  // add Post
  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      nomeUsuario: inputNome,
      fotoUsuario: inputFotoUsuario,
      fotoPost: inputFotoPost,
    };
    const newListPost = [...post, newPost];
    setPost(newListPost) 
    setInputNome('')
    setInputFotoUsuario('')
    setInputFotoPost('')
      // {
      //   nomeUsuario: inputNome,
      //   fotoUsuario: inputFotoUsuario,
      //   fotoPost: inputFotoPost,
      // }
  }

  const informacoesPost = post.map((usuario, index) => {
    return (
      <Post
        key={index}
        nomeUsuario={usuario.nomeUsuario}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
      />
    );
  });

  return (
    <MainContainer>
      <Titulo> InstaLab </Titulo>
      <Form>
        <label>Nome Usuário</label>
        <input
          placeholder="Insira seu nome de usúario"
          value={inputNome}
          onChange={handleInputNome}
        />

        <label> Foto Perfil</label>
        <input
          placeholder="Insira sua foto de Perfil"
          value={inputFotoUsuario}
          onChange={handleInputFotoUsuario}
        />

        <label> Foto Post </label>
        <input
          placeholder="Adicione uma foto"
          value={inputFotoPost}
          onChange={handleInputFotoPost}
        />
        <button onClick={addPost}> Publicar </button>
      </Form>
      {informacoesPost}
    </MainContainer>
  );
}

export default App;
