// src/components/About/About.jsx
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <h2 className="about__title">Sobre o Projeto</h2>
      <p className="about__paragraph">
        Este é um projeto final desenvolvido como parte do programa de desenvolvimento web da TripleTen.
        O objetivo é demonstrar habilidades em React, HTML semântico, CSS (com BEM e responsividade)
        e integração com APIs de terceiros.
      </p>
      <p className="about__paragraph">
        O foco principal é a criação de um aplicativo front-end robusto, com uma interface de usuário
        intuitiva e que se adapte a diferentes dispositivos.
      </p>
      <h3 className="about__subtitle">Sobre o Autor</h3>
      <p className="about__paragraph">
      Meu nome é Ellen Silva e sou uma profissional versátil e determinada, com formação técnica e experiência prática em diferentes áreas. No Brasil, cursei até a metade da graduação em Engenharia e atuei com marketing digital, onde desenvolvi habilidades como designer, analista de marketing, social media, criadora de anúncios e estrategista de prospecção. Desde que cheguei à Austrália, venho me especializando em Cyber Security por meio de um curso de TI, ao mesmo tempo em que finalizo meus estudos em Web Development pela TripleTen.      </p>
    </section>
  );
}

export default About;