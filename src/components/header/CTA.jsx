import React from 'react'
import CV from '../../assets/Sanchez Bejar, Jairo.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Descargar CV</a>
        <a href="#contact" className="btn btn-primary">Contacto</a>
    </div>
  )
}

export default CTA