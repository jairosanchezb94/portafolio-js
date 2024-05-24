import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const About = () => {
  return (
   <section id="about">
      <h2>Sobre Mi</h2>
      <div className="container about__container">
        <div className="about__me">
         </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>3 años</small>
            </article>
            <article className="about__card">
              <BsGithub className="about__icon" />
              <h5>Proyectos finalizados </h5>
              <small>53 Github</small>
            </article>
          </div>
          <p>
            ✍🏼 ¡Con casi tres años de experiencia en desarrollo Front-end, 
            me especializo en crear interfaces de usuario interactivas y eficientes. 
            Resido en Andalucía y he colaborado con diversas empresas en Madrid. 
            Mi formación incluye un Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM) y 
            cursos especializados en Angular, React, JavaScript, TypeScript, Figma y Adobe Illustrator.
          </p>
          <p>
            Antes de mi carrera en programación, trabajé como técnico forestal, donde adquirí habilidades en comunicación, 
            gestión de proyectos y liderazgo de equipos, esenciales para la entrega efectiva de proyectos en plazos ajustados.
            Técnicamente, tengo experiencia en Lit-Element, HTML5, CSS3, SASS, XML, Java, SQL, MongoDB, HeidiSQL, SmartGit, MySQL, Jira, 
            y Sourcetree. Manejo herramientas de diseño como Photoshop y Canva.
          </p>
          <p>
            Estoy abierto a discutir nuevas oportunidades y colaboraciones. Si estás interesado en saber más sobre mi perfil profesional,
            ¡no dudes en conectar!
          </p>
          <a href="#contact" className="btn btn-primary">Contáctame</a>
        </div>
      </div>
   </section>
  )
}

export default About;