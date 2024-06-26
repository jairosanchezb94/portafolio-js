/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/jairo-sanchez-bejar/" target="_blank">
        <BsLinkedin/>
        </a>
        <a href="https://github.com/jairosanchezb94" target="_blank">
        <BsGithub/>
        </a>
    </div>
  )
}

export default HeaderSocials;