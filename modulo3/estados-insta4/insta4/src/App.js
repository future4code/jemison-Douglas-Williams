import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import fotoJulia from './img/foto1.jpg';
import fotoVivi from './img/foto2.jpg';
import viviane from './img/viviane.jpg';
import juliana from './img/juliana.jpg'


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
  return(
    <div className="App">
        <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
        </MainContainer>

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

}


export default App;
