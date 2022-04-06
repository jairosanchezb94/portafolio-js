import React from 'react'
import './footer.css'
import {BsLinkedin, BsGithub, BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Jairo Sánchez</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicio</a></li>
        <li><a href="#portafolio">Portafolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__social">
        <a href="https://www.linkedin.com/in/jairo-sanchez-64416a12b/"><BsLinkedin /></a>
        <a href="https://github.com/jairosanchezb94"><BsGithub /></a>
        <a href="https://twitter.com/JairoSanzz"><BsTwitter /></a>
      </div>

      <div className="footer__copyright">
        <p>&copy; 2022 Jairo Sánchez. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
