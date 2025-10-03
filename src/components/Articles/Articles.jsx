import React from 'react';
import './Articles.css';

const projects = [
  {
    title: "HUMANIZE: plataforma da produção científica brasileira da área de humanidades.",
    description: "Prover uma plataforma que permita a ampliação de consultas, visualização e análise da produção científica de humanidades do Brasil. ",
    link: "https://repositorio.ufpe.br/handle/123456789/53047?mode=full" // Link para o GitHub/Demo
  },
  {
    title: "Analisando dados públicos: um estudo sobre as compras de diárias e passagens no contexto pandêmico",
    description: "Buscamos identificar qual o valor gasto por cada órgão, valores gastos por cidade e a quantidade de viagens realizadas por mês. De forma metodológica utilizaremos o modelo KDD – Knowledge Discovery in Databases (KDD)",
    link: "https://www.researchgate.net/publication/350950720_Analisando_dados_publicos_um_estudo_sobre_as_compras_de_diarias_e_passagens_no_contexto_pandemico?channel=doi&linkId=607b47c0907dcf667ba83b70&showFulltext=true"
  },
];

function Articles() {
  return (
    <div className="articles-container">
      <h2>Meus Artigos & Projetos</h2>
      <p>Uma amostra do meu trabalho, desde projetos pessoais até contribuições em código aberto.</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Articles;