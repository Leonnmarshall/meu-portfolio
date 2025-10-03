import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import './App.css'; // Para estilos globais do App

function App() {
  return (
    <div className="portfolio-app">
      {/* O Header fica fixo, ou no topo da página */}
      <Header />
      
      <main>
        {/* Cada componente receberá um ID para ser o alvo do link âncora */}
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre">
          <About />
        </section>

        <section id="experiencia">
          <Experience />
        </section>
        
        <section id="artigos">
          <Articles />
        </section>

        <section id="contato">
          <Contact />
        </section>
      </main>
      
      {/* Opcional: Footer */}
      <footer>
        <p>© 2025 Leonardo Marçal. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;