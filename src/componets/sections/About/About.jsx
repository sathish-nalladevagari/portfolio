import React from 'react'
import './About.css'
import pdf from '../../../images/resume.pdf'


function About() {
  return (
  <div id='about-route'>
    
  <div className=' about' >
    <div className='about-left' id='about'><a href={pdf} download="resume"><button>Download Resume</button></a></div>
    <div className='about-right'>
      <h1 className='about-title'>About me</h1>
      <p>I am very intersted in Web devlopment
        Looking for an opportunity to associate myself with a progressive organization that gives me scope to update my
        skills and knowledge
       </p>
        <h2 className='about-title'>Languages I Know</h2>
        <p>Python JavaScript Java</p>
        <h1 className='about-title'>Technologies I Know</h1>
        <p>NodeJs ,ExpressJs ,SQL, MongoDB, Django,ReactJs, HTML5, CSS3</p>

    </div>
    </div>
  </div>
  )
}

export default About