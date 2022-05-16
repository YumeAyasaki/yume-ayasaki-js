import React from 'react'
import {BsGithub, BsFacebook, BsDiscord} from 'react-icons/bs'

function Socials() {
  return (
    <div className='socials'>
        <a href='https://github.com/YumeAyasaki' target="_blank" rel="noreferrer"><BsGithub /></a>
        <a href='https://www.facebook.com/Quang.Nguyen.Duy.Nhoi/' target="_blank" rel="noreferrer"><BsFacebook /></a>
        <a href='https://discord.com/users/yume#1170' target="_blank" rel="noreferrer"><BsDiscord /></a>
    </div>
  )
}

export default Socials