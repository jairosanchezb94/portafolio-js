import React from 'react'
import './experience.css'
import {BsBookmarkCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience">
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Alto</small>
              </div>         
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>CSS/Sass</h4>
                <small className="text-light">Medio</small>
              </div>          
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Medio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Medio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Medio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>Angular</h4>
                <small className="text-light">Medio</small>
              </div> 
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>Ionic</h4>
                <small className="text-light">Bajo</small>
              </div>   
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Medio</small>
              </div>
            </article>
          </div>
        </div>
          <div className="experience__tools">
          <h3>Herramientas</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>VScode</h4>
                  <small className="text-light">Alto</small>
                </div>
              </article>
              <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Git</h4>
                  <small className="text-light">Medio</small>
                </div>       
              </article>
              <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Github/Sourcetree</h4>
                  <small className="text-light">Medio</small>
                </div>     
              </article>
              <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Jira</h4>
                  <small className="text-light">Alto</small>
                </div> 
              </article>
              <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Photoshop/Adobe Illustrator/Canva</h4>
                  <small className="text-light">Alto</small>
                </div>          
              </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Developer</h3>
            <div className="experience__content">
          <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Bajo</small>
                </div>
              </article>
              <article className="experience__details">
                <BsBookmarkCheckFill className="experience__details-icon"/>
                <div>
                  <h4>HeidisSQL/MySQL</h4>
                  <small className="text-light">Bajo</small>
                </div>               
              </article>
          </div>
        </div>
      </div>
           
        
   </section>
  )
}

export default Experience
