/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
//import { useRef } from 'react';
//import emailjs from '@emailjs/browser';


const Contact = () => {
  /*const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hpphm9z', 'template_9u1w1f5', form.current, 'user_BKlgbUIsPhoSurhyvv6Y0')
    e.target.reset();
  };*/

  return (
    <section id="contact">
      <h2>Contacto</h2> 

      <div className="container contact__container"> 
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon"/>
            <h3>Correo</h3>
            <h5>jairosanchezb5@gmail.com</h5>
            <a href="mailto:jairosanchezb5@gmail.com " target="_blank">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className="contact__option-icon"/>
            <h3>Linkedin</h3>
            <h5>Jairo Sánchez</h5>
            <a href="https://www.linkedin.com/in/jairo-sanchez-64416a12b/" target="_blank">Conectar</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h3>Whatsapp</h3>
            <h5>+34 625 25 15 17</h5>
            <a href="https://wa.me/34625251517" target="_blank" rel="noreferrer">Enviar mensaje</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact
