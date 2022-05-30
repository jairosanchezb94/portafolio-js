import React from 'react'
import './services.css'
import {GoCheck} from 'react-icons/go'

const Services = () => {
  return (
    <section id="services">
      <h2>Labores realizadas</h2>

      <div className="container labors__container">
        <article className="labors">
          <div className="labors__head">
            <h3>Diseñador Redes Sociales</h3>
          </div>

          <ul className="labors__list">
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>He realizado control y gestión de cuentas y redes sociales.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>He realizado la creación de las publicaciones.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Aumento de los seguidores con campañas publicitarias.</p>
            </li>
          </ul>
        </article>
        <article className="labors">
          <div className="labors__head">
            <h3>Frontend Developer</h3>
          </div>

          <ul className="labors__list">
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>He realizado procesos de maquetación web.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>He realizado consultas a la API, en Angular, React, JavaScript.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>De la parte de Angular, manejo de eventos, click e implementación de *ngIf y *ngFor junto a ciclo de vida del componente.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>De la parte de Angular, implementación de material angular, creación de componentes custom como ngx-spinner y componentes de diseño de Angular Material. Junto a creación de gráficas.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>De la parte de Angular, Ionic mayormente diseño y adaptación en proyecto de Angular y en conjunto con Material Angular.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>De la parte de React, introducción en esta librería, maquetación de web, así como una base en Redux</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Implementación de  Web Responsive</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Entre otras cosas más...</p>
            </li>
          </ul>
        </article>
        <article className="labors">
          <div className="labors__head">
            <h3>Backend Developer</h3>
          </div>

          <ul className="labors__list">
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Realizar tareas en Java.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Consultas de datos con Java.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Creación y consulta de base de datos con MySQL y phpmyandmin.</p>
            </li>
            <li>
              <GoCheck className="labors__list-icon"/>
              <p>Uso de herramientas como eclipse NetBeans.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
