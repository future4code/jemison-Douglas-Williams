// Imagens
import image from './img/Foto_Principal.jpg'
import github from './img/git.png'
import face from './img/face-black.png'
import insta from './img/Insta-black.png'
import linke from './img/linke-black.png'
import whats from './img/whats-black.png'

// Arquivo css
import './App.css';

//Variáveis e arquivos JSX
const titulo = 'Olá! Meu nome é Douglas Williams, seja bem vindo(a) ao meu site!'

function App() {
  const boaNoite =()=> {
    alert ('Click nas minhas redes sociais abaixo!')
  }

  return (
    <div className="App">

      <h1>{titulo}</h1>

      <img src={image} className="minha-foto" alt="Foto de perfil do Douglas Williams desenvolvedor da página"/>
      
      <h3>Este é o meu primeiro site React.</h3>
     
      <a href="https://github.com/DouglasWilliams298" target="_blank" rel="noreferrer">
        <img className="github" src={github} alt="Logo Github" />
      </a>

      <button className="alert" onClick = {boaNoite}> Me conheça melhor </button>
      
      <div className="contato">
        
        <a href="https://www.linkedin.com/in/douglas-werner-5b4169119/" target="_blank" rel="noreferrer">
          <img className="linke" src={linke} alt="Logo Linkedin" />
        </a>

        <a href="https://www.instagram.com/douglaswerner_/" target="_blank" rel="noreferrer">
          <img className="insta" src={insta} alt="Logo Instagram" />
        </a>

        <a href="https://www.facebook.com/DouglasWilliams1991/" target="_blank" rel="noreferrer">
          <img className="face" src={face} alt="Logo Facebook" />
        </a>

        <a href="https://wa.me/5547997797452" target="_blank" rel="noreferrer">
          <img className="whats" src={whats} alt="Logo WhatsApp" />
        </a>

      </div>
    </div>
  );
}

export default App;
