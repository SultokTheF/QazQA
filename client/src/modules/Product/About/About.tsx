import React, {useEffect}  from 'react'
import './About.css'
// import customerImg from '../../Assets/customer.png'
// import mountainImg from '../../Assets/mountain.png'
// import climbingImg from '../../Assets/climbing.png'
// import video from '../../Assets/video.mp4'

// import Support from '../../assets/images/Support.png'
// import Development from '../../assets/images/info.png'
// import Field from '../../assets/images/choice.png'

// import video from '../../assets/video/AldiyarFlex.MOV'

// Import Aos ======================>
import Aos from 'aos'
import 'aos/dist/aos.css'


const About: React.FC = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  }, []) 

  return (
    <section className='about  section' id={`about`}>
      <div className="secContainer">

        <h2 className='title'>
          Бұл чатботтың мүмкіндіктері
        </h2>


        <div className="mainContent container grid">

          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">
            <img alt="Image" />
            <h3>Контекст негізінде сұраққа жауап іздеу</h3>
            <p>Пайдаланушы чатботпен диалог кезінде контекстін енгізіп, оған сұрақ қоса алады. Бот контекстті талдап, пайдаланушының сұрағына жауап береді.</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">
            <img alt="Image" />
            <h3>Контексттік мәліметтер базасын үнемі кеңейту</h3>
            <p>Чатботпен диалогқа кіріспес бұрын, Пайдаланушы өзі енгізген контексттерді өңдеуге және сақтауға рұқсат бере алады.</p>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">
            <img alt="Image" />
            <h3>Контекстсіз сұраққа жауап табу</h3>
            <p>Пайдаланушы сұрақтың жауабын контекстсіз табуға тырысуы мүмкін. Ол үшін бот пайдаланушыдан сұрақ алады және косинустық ұқсастық алгоритмдеріне негізделген сұраққа сәйкес контекст іздейді.</p>
          </div>
        </div>

        <div className="videoCard container">
          <div className=" cardContent grid">
            <div data-aos="fade-right" className="cardText">
              <h2>QUSH</h2>
              <p>Quantitative, Qualitative and Quick</p>
            </div>

            <div data-aos="fade-left" className="cardVideo">
              <video autoPlay muted loop>
                <source type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About