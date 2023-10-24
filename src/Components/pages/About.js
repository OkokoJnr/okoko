import React from 'react'
import aboutMe from '../../images/about.jpeg'
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
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                        
                    </p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About
