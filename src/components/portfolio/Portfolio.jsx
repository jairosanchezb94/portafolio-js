/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './portfolio.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpg'
import p6 from '../../assets/p6.jpg'


const data = [
  {
    id: '1',
    image: p1,
    title: 'Peliculas',
    github: 'https://github.com/jairosanchezb94/PeliculasjsApp',
    demo: 'https://jairosanchezb94.github.io/PeliculasjsApp/home'
  },
  {
    id: '2',
    image: p2,
    title: 'Todo List',
    github: 'https://github.com/jairosanchezb94/todo-list',
  },
  {
    id: '3',
    image: p3,
    title: 'Web Tiempo',
    github: 'https://github.com/jairosanchezb94/web-tiempo',
    demo: 'https://jairosanchezb94.github.io/web-tiempo/'
  },
  {
    id: '4',
    image: p4,
    title: 'Calculadora',
    github: 'https://github.com/jairosanchezb94/calculadora',
    demo: 'https://jairosanchezb94.github.io/calculadora/'
  },
  {
    id: '5',
    image: p5,
    title: 'Rick and Morty',
    github: 'https://github.com/jairosanchezb94/rick-and-morty',
    demo: 'https://jairosanchezb94.github.io/rick-and-morty/usuarios'
  },
  {
    id: '6',
    image: p6,
    title: 'Notas',
    github: 'https://github.com/jairosanchezb94/notas-app',
    demo: 'https://jairosanchezb94.github.io/notas-app/home'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Proyectos</h2>
      <div className="container portafolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portafolio__item">
                <div className="portafolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portafolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
                </div>
            </article>
            )
          })
        }
      </div>   
    </section>
  )
}

export default Portfolio;
