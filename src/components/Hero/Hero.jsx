import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Olá, eu sou Leonardo Marçal.</h1>
        <h2>Desenvolvedor Full-Stack e Futuro Engenheiro de Software</h2>
        <p className='bio'>
          Meu prósito é transformar ideias em soluções digitais robustas e escaláveis. <br></br>
          E Então, vamos construir algo incrível juntos?
        </p>
        <a href="#contato" className="cta-button">Fale Comigo</a>
      </div>
      {/* Opcional: Adicione sua foto ou uma ilustração aqui */}
      <div className="hero-image">
        {/* <img src="/caminho/para/sua/foto.jpg" alt="Foto de Perfil" /> */}
      </div>
    </div>
  );
}

export default Hero;