import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'

const About = () => {
  return (
   <section id="about">
      <h5>Conóceme</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">

         </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>9 meses</small>
            </article>

            <article className="about__card">
              <BsGithub className="about__icon" />
              <h5>Proyectos finalizados </h5>
              <small>30 Github</small>
            </article>

          </div>

          <p>
            ✍🏼 Cuento con nueve meses de experiencia laboral en este sector, 
            trabajando para diferentes empresas (en Andalucía y Madrid) 
            y he estudiado el Grado Superior DAM, 
            junto a diferentes cursos especializados en front-end (Angular, React, JavaScript, TypeScript, Figma, Illustrator, Maquetación y Web Responsive) 
            los cuales me han dado herramientas y habilidades claves para desarrollar mi trabajo.
          </p>
          <p>
            Antes de ser programador, 
            he trabajado en diferentes empresas de medio ambiente (debido a mi título como técnico forestal) 
            donde he aprendido a comunicar ideas, presentar propuestas de manera clara y sencilla, 
            cadenas de jerarquías, distribución de tareas (delegar), 
            responsabilidad frente a fechas de entrega. Entre otras. 
          </p>

          <a href="#contact" className="btn btn-primary">Contáctame</a>
        </div>
      </div>

   </section>
  )
}

export default About