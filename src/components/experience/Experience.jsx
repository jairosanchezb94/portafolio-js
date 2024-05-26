import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h2>Labores realizadas</h2>
      <div className="container labors__container">
        <article className="labors">
          <div className="labors__head">
            <h3>Frontend Developer</h3>
          </div>
          <ul className="labors__list">
            <li>
              <p>
                Mi experiencia en desarrollo front-end es amplia y diversa, habiendo trabajado en múltiples proyectos utilizando tecnologías como React, Angular, 
                y JavaScript ES6. Por ejemplo, en mi trabajo reciente para el Santander, estuve a cargo del desarrollo de componentes nuevos y la maquetación utilizando React, 
                JavaScript, y CSS. Además, en Accenture, me enfoqué en la creación de interfaces responsivas y accesibles, trabajando con HTML5, Sass, y CSS3.
              </p>
            </li>
          </ul>
        </article>
        {/* <article className="labors">
          <div className="labors__head">
            <h3>Backend Developer</h3>
          </div>
          <ul className="labors__list">
            <li>
              <p>
                Realizar tareas en Java.
                Consultas de datos con Java.
                Creación y consulta de base de datos con MySQL y phpmyandmin.
                Uso de herramientas como eclipse NetBeans.
              </p>
            </li>
          </ul>
        </article> */}
        <article className="labors">
          <div className="labors__head">
            <h3>¿Cómo maneja los desafíos en los proyectos de desarrollo?</h3>
          </div>
          <ul className="labors__list">
            <li>
              <p>
                A lo largo de mi carrera, he enfrentado y superado varios desafíos en los proyectos de desarrollo. 
                Por ejemplo, durante mi tiempo en Accenture, trabajé en la reorganización de un proyecto para BBVA, desarrollando con React Hooks 
                y gestionando pruebas con herramientas como Jest y Gherkin. Mi capacidad para adaptarme y manejar estructuras jerárquicas y plazos, 
                una habilidad que perfeccioné durante mis experiencias anteriores en el sector ambiental, ha sido fundamental para superar estos retos.
              </p>
            </li>
          </ul>
        </article>
        <article className="labors">
          <div className="labors__head">
            <h3>¿Tiene experiencia trabajando en equipo y de forma remota?</h3>
          </div>
          <ul className="labors__list">
            <li>
              <p>
                Sí, he tenido la oportunidad de trabajar en equipos ágiles y autoorganizados, tanto de manera presencial como remota. En Accenture, por ejemplo, 
                participé en un equipo ágil que desarrollaba usando metodologías DevOps y herramientas de colaboración como Git, Bitbucket, y Jira. 
                Esta experiencia se complementa con mi capacidad de comunicar ideas eficazmente y manejar tareas de forma eficiente, 
                habilidades que desarrollé en mis roles anteriores y que son esenciales para el éxito en entornos de trabajo colaborativos y remotos.
              </p>
            </li>
          </ul>
        </article>
        <article className="labors">
          <div className="labors__head">
            <h3>¿Cómo ha contribuido a la mejora de los procesos de desarrollo en sus roles anteriores?</h3>
          </div>
          <ul className="labors__list">
            <li>              
              <p>
                En mis roles anteriores, he contribuido significativamente a la mejora de procesos de desarrollo a través de la implementación de prácticas eficientes y el uso de tecnologías avanzadas. 
                Por ejemplo, en Digital55, lideré la implementación de Material Angular y la creación de componentes personalizados que mejoraron la funcionalidad y la interfaz de usuario de los proyectos. 
                Además, mi experiencia en la gestión de proyectos con Jira en Jaraxa ayudó a mejorar la organización y la entrega de proyectos, asegurando una alta calidad y cumplimiento de plazos.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience;
