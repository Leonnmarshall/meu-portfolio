import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h2>Sobre Mim</h2>
      <div className="about-content">
        <p>
          Minha jornada em desenvolvimento começou há 5 anos com JavaScript e evoluiu para o ecossistema React, onde hoje me especializo em criar interfaces dinâmicas e de alto desempenho. Tenho conhecimentos em Node.js, Python, e possuo experiência com bancos de dados relacionais e gestão ágil de projetos de TI.
        </p>
        <p>
          Sou formado em Análise e Desenvolvimento de Sistemas pela Faculdade Senac e Bacharel em Biblioteconomia pela Universidade Federal de Pernambuco, atualmente estou me especializando em Propriedade Intelectual e Inovação.
        </p>
        <p>
          Busco sempre por código limpo, testável e escalável. Acredito que a melhor 
          solução é aquela que equilibra performance e manutenibilidade.
        </p>
        
        <h3>Habilidades Chave</h3>
        <ul className="skills-list">
          <li>React</li>
          <li>Node.js & Express</li>
          <li>Python</li>
          <li>PostgreSQL & MongoDB</li>
          <li>Git & CI/CD</li>
          <li>Desenvolvimento Ágil</li>
          <li>Airflow e Pipelines</li>
          <li>JavaScript</li>
          <li>Gestão Informacional</li>
        </ul>
      </div>
    </div>
  );
}

export default About;