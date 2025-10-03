import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Entre em Contato</h2>
      <p>
        Interessado em colaborar ou apenas quer trocar uma ideia sobre tecnologia? 
        Ficarei feliz em ouvir você!
      </p>
      
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:datauniversebr@gmail.com">datauniversebr@gmail.com</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/leonnmarshall/" target="_blank" rel="noopener noreferrer">Meu Perfil</a></p>
        <p><strong>GitHub:</strong> <a href="https://leonnmarshall.github.io/meu-portfolio/" target="_blank" rel="noopener noreferrer">Repositórios</a></p>
      </div>

      {/* Opcional: Formulário de contato, se tiver um serviço de backend */}
      {/* <form className="contact-form">
        <input type="text" placeholder="Seu Nome" required />
        <input type="email" placeholder="Seu Email" required />
        <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
        <button type="submit">Enviar Mensagem</button>
      </form>
      */}
    </div>
  );
}

export default Contact;