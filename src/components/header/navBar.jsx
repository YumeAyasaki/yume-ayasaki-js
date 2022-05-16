import React from 'react'
import CV from '../../assets/cv.pdf'

import './Header.css'

function NavBar() {
  return (
    <div className='cta'>
        <a className='cta__btn' href="#about">About me</a>
        <a className='cta__btn' href={CV} download>Maybe CV</a>
        <a className='cta__btn' href="#contact">AMA</a>
    </div>
  )
}

export default NavBar