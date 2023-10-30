import React from 'react'
import aboutMe from '../../images/profile.jpeg'
function About() {

    
  return (
    <div>
      
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center section-heading">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src={aboutMe} class= "imageAboutPage" alt=""/>
                </div>
                <div class="col-lg-8">
                    <div>
                        <p> 
                            Okoko Godwin-Jnr, a 2023 graduate of Chemical Engineering from the prestigious Federal University of Technology, Minna, Niger State, Nigeria. He ventured into the world of tech few years prior to graduation form university.
                            He has ever since then dedicate himself to continous learning, growth and personal development.
                            
                    
                        </p>
                    </div>
                    <div>
                        <h2>Tools and Stack Proficiency</h2>
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
