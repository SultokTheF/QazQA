import React, { useState } from 'react'
import './Navbar.css';

import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const Navbar: React.FC = () => {
  const userData = {
    firstName: "Sultok",
    lastName: "TheF",
    role: "ADMIN"
  }

  const [active, setActive]  = useState('navBar')

  const showNav = ()=>{
    setActive('navBar activeNavbar')
  }
  const removeNav = ()=>{
    setActive('navBar')
  }

  //code statement to add a background color to the header.
  const [transparent, setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
    setTransparent('header activeHeader')
    }else{
    setTransparent('header')
    }
  }
  window.addEventListener('scroll', addBg)

  return (
    <section className='navBarSection'>
      <header className={transparent}>

        <div className="logoDiv">
          <a href="/" className="logo flex"><h1>AI.AstanaIT</h1></a>
       </div>

        <div className={active}>
          <ul onClick={removeNav} className="navLists flex">
            <li className="navItem">
              <a href="/#main" className="navLink">Басты</a>
            </li>
            <li className="navItem">
              <a href="/#about" className="navLink">Біз туралы</a>
            </li>
            <li className="navItem">
              <a href="/#contact" className="navLink">Байланыс</a>
            </li>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon'/>
        </div>
      </header>
    </section>
  )
}

export default Navbar