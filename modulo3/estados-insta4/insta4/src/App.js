import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App(

  const lista = [
    {
      nomeUsuario: "paulinha",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/210/150",
    },
    
  return(
    <div className="App">
        <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>,

        <MainContainer>
          <Post
            nomeUsuario={'_juliana'}
            fotoUsuario={juliana}
            fotoPost={fotoJulia}
          />
        </MainContainer>

        <MainContainer>
          <Post
            nomeUsuario={'viviane_'}
            fotoUsuario={viviane}
            fotoPost={fotoVivi}
          />
        </MainContainer>
    </div>
  )

   
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
