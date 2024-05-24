import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/perfil.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Jairo Sánchez</h1>
        <h2 className="text-light">Front-end Developer</h2>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img className="img" src={ME} alt="Jairo Sánchez" />
        </div>
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;