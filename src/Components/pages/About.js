import React from 'react'
import aboutMe from '../../images/profile.jpeg'
function About() {

    
  return (
    <div>
      
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center section-heading">About Me</h1>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <img src={aboutMe} className= "imageAboutPage" alt=""/>
                </div>
                <div className="col-lg-8">
                    <div className='col-lg-12'>
                        <p> 
                            Okoko Godwin-Jnr, a 2023 graduate of Chemical Engineering from the prestigious Federal University of Technology, Minna, Niger State, Nigeria. He ventured into the world of tech few years prior to graduation form university.
                            He has ever since then dedicate himself to continous learning and growth in personal development, digital and technological skills.
                            He also is committed to providing opportunity for young Africans and individuals to empower themselves with various skills cutting accros technology/AI and Academics. 
                        </p>
                    </div>
                    <div className='col-lg-12 '>
                        <h2 className="text-center section-heading" >Tools and Stack Proficiency</h2>
                        <ul>
                            <li>HTML and CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Wordpress</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
