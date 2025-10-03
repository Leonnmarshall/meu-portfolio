import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="main-header">
      <div className="logo"></div>
      <nav>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#experiencia">Experiência</a></li>
          <li><a href="#artigos">Artigos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;