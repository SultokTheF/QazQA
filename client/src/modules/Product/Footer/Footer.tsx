import React, {useEffect} from 'react'
import './Footer.css'
import {ImFacebook} from 'react-icons/im'
import {BsTwitter} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {SiYourtraveldottv} from 'react-icons/si'

// import Logo from '../../../../assets/images/logo/QUSH_logo_black_expanded.png'

// import AOS ============================>
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <div className='footer' id={`contact`}>
      <div className="secCotainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex"><h1>AI.AstanaIT</h1></a>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" className="footerLinks">
          <span className="linkTitle">Информация</span>
          <li>
            <a href="/#main">Главная</a>
          </li>
          <li>
            <a href="/#about">О нас</a>
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">Полезные ссылки</span>
          <li>
            {/* <a href="/field">Список полей</a> */}
          </li>
          <li>
            {/* <a href="#">Карта</a> */}
          </li>
          <li>
            {/* <a href="#">Популярные места</a> */}
          </li>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
          <span className="linkTitle">Контакты</span>
          <span className='phone'>+7 707 109 88 41</span>
          <span className="email">220548@astanait.edu.kz</span>
        </div>
      </div> 
    </div>
  )
}

export default Footer