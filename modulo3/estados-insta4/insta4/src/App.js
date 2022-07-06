import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  const lista = [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/210/150",
    },

    {
      nomeUsuario: "_juliana",
      fotoUsuario: "https://picsum.photos/20/50",
      fotoPost: "https://picsum.photos/220/150",
    },

    {
      nomeUsuario: "marjorye__",
      fotoUsuario: "https://picsum.photos/40/50",
      fotoPost: "https://picsum.photos/230/150",
    },
  ];

  const informacoesLista = lista.map((usuario, index) => {
    return (
      <Post
        key={index}
        nomeUsuario={usuario.nomeUsuario}
        fotoUsuario={usuario.fotoUsuario}
        fotoPost={usuario.fotoPost}
      />
    );
  });

  return <MainContainer>{informacoesLista}</MainContainer>;
}

export default App;
