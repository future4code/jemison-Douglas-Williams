import React from 'react';
import './App.css';
import imagemPerfil from './img/foto-perfil.jpg';
import americanas from './img/logo-lojas-americanas.png'
import fischer from './img/fischer.png'
import face from './img/face.png'
import insta from './img/insta.png'
import email from './img/email.png'
import linkedin from './img/linkedin-colorido.png'
import git from './img/logo-git.png'
import local from './img/local-icon.png'
import whats from './img/whats.png'
import seta from './img/user-arrow.png'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ImagemButton2 from './components/ImagemButton2/ImagemButton2';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= {imagemPerfil}
          nome="Douglas Williams" 
          descricao="Oi, eu sou o Douglas Williams.  Sou apaixonado pelo universo da tecnologia, sou musico, toco bateria, violão, gosto muito de carros
          e estou sempre a procura de novos desafios."
          subDescricao="Determinado a submergir no mundo da tecnologia e me profissionalizar cada vez
          mais"
        />

        <ImagemButton 
          link=".cursor-button" 
          texto="Ver mais"
          imagem={seta}
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          link="https://wa.me/5547997797452"
          imagem={whats}
          texto="Número: 47 99779-7452"
        />

        <CardPequeno
          link="https://www.google.com.br/maps/place/R.+Vicente+Paulo+Kunitz+-+Limeira,+Brusque+-+SC,+88356-000/@-27.085184,-48.8799628,15z/data=!3m1!4b1!4m5!3m4!1s0x94df480d3c125f9d:0xcc1879064b3b81d3!8m2!3d-27.0852034!4d-48.871208"
          imagem={local}
          texto="Endereço: Rua Vicente Paulo Kunitz, nº 35 - Limeira, Brusque - SC"
        />

        <CardPequeno
          link="mailto:douglaswerner10@gmail.com"
          imagem={email}
          texto="E-mail: douglaswerner10@gmail.com"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={americanas}
          nome="Lojas Americanas" 
          descricao="Comecei como extra natal(trabalho extra com contrato de 1 mês), depois de 15 dias fui contratado
           para atuar como operador de caixa, no período que passei de 3 anos cheguei a supervisor de loja e atuei como 
           gerente comercial." 
        />
        
        <CardGrande 
          imagem= {fischer} 
          nome="Fischer" 
          descricao="Trabalho atualmente como atendente de suporte técnico, comecei em setembro de 2020 como auxiliar
          de operador, logo após 1 mês fui promovido a operador 1, no terceiro mês fui promovido ao setor do SAC e agora
          atendente de suporte técnico" 
        />
      </div>

      <h2 className="cursor-button">Minhas redes sociais</h2>

      <div className="page-section-container2">
        <ImagemButton2
          link="https://www.facebook.com/DouglasWilliams1991/" 
          imagem={face}
          texto="Facebook" 
        />  

        <h1>   </h1>

        <ImagemButton2 
          link="https://www.instagram.com/douglaswerner_/"
          imagem={insta} 
          texto="Instagram" 
        />

        <h1>   </h1>

        <ImagemButton2 
          link="https://www.linkedin.com/in/douglas-werner-5b4169119/"
          imagem={linkedin} 
          texto="linkedIn" 
        />

        <h1>   </h1>

        <ImagemButton2 
          link="https://github.com/DouglasWilliams298"
          imagem={git} 
          texto="GitHub" 
        />

      </div>
    </div>
  );
}

export default App;
