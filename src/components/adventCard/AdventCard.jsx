import React from 'react'

import Socials from './Socials'
import TextSection from './TextSection'

import './AdventCard.css'

function AdventCard() {
  return (
    <div className="card">
        <div className="grid">
            <img className="rounded-circle avatar" src='./img/avt.jpg' alt="Avatar" />
            <div className="text">
                <div className="text__title">Adventure card</div>
                <div className="text" id="first-line">
                    {/* Name */}
                    <TextSection name="Name" content="@card.Name" firstLine/>
                    {/* Class */}
                    <TextSection name="Class" content="@card.Job" firstLine/>
                </div>
                {/* Title */}
                <TextSection name="Title" content="@card.Title" />
                {/* Skill */}
                <TextSection name="Skill" content="@card.Skill" />
            </div>
        </div>
        <div className="quote">
            <div>
                "@card.Quote?.quote"
            </div>
            <div className="quote__text__author">
                - @card.Quote?.character, @card.Quote?.anime -
            </div>
        </div>
        <Socials />
    </div>
  )
}

export default AdventCard