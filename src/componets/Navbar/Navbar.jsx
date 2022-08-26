import React from 'react'
import './Navbar.css'




function Navbar() {
  return (
    <div className='nav-container'>

    <div className='right-nav'>
        <nav>
            
              

            <ul>
                <li><a href="#home-route">Home</a></li>
                
                <li><a href="#about-route">About Me</a></li>
                
                <li><a href="#projects-route">Projects</a></li>
                <li><a href="#contact-route">Contact Me</a></li>
                
        
            </ul>
            
            
           
            
        </nav>
    </div>

    </div>
  )
}

export default Navbar