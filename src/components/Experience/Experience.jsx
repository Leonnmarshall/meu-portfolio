import React from 'react';
import './Experience.css';

const experiences = [

    {
    title: "Líder Técnico de Desenvolvimento",
    company: "Mega Criativa - Tecnologia e Inovação",
    duration: "2025 - Atual",
    description: "Liderança na definição da arquitetura de software e padrões de código. Realização de revisão de código (code review) e mentoria técnica da equipe de desenvolvedores. Gerenciamento da dívida técnica e planejamento da evolução da infraestrutura. Ponto focal técnico na comunicação com PMs/POs."
  },

  {
    title: "Desenvolvedor Pleno",
    company: "Grupo Boticário.",
    duration: "2021 - jun 2025",
    description: " Desenvolvimento e aprimoramento contínuo de aplicações, com foco em usabilidade e performance. Atuando em uma equipe multidisciplinar, colaborava ativamente no entendimento dos requisitos de negócio e na criação de novas funcionalidades. Além disso, garantia a qualidade das entregas através de testes rigorosos e da documentação técnica das soluções."
  },
  {
    title: "Gestão Informacional",
    company: "Mobilize - Engenharia de Telecomunicações",
    duration: "2020 - 2021",
    description: " Gestão de documentos digitais e a criação de repositório Digital para otimizar o acesso à informação. Análise de dados para desenvolvimento de indicadores métricos que monitoraram e aprimoraram a qualidade dos serviços prestados."
      },
];

function Experience() {
  return (
    <div className="experience-container">
      <h2>Experiência Profissional</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.title}</h3>
              <h4>{exp.company} - <span>{exp.duration}</span></h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;