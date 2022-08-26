import React from 'react'
import './Home.css'
import Typical from 'react-typical'
import  pic from '../../../componets/2.jpg'
import linkdin from '../../../images/linkedin.png'
import github from '../../../images/github.png'
import instagram from '../../../images/instagram.png'
import facebook from '../../../images/facebook.png'
import twitter from '../../../images/twitter-sign.png'



function Home() {
  return (
    <div id='home-route' >

    <div className='container'>
      <div className='left-container'>
        
      <div className='home-left' id='home'>
        
        <p>Hii I'm</p> <h1>Sathish Reddy</h1>
        <Typical
        steps={['Student', 2000, 'Full Stack Devloper', 2000,'Enthusiastic',1000,'Frontend Devloper',2000]}
        loop={Infinity}
        wrapper="p"
        />
      </div>
        </div>
      <div className='image-container'>
        
        <img  src={pic} alt="image" className='image' />
        
        <div className='icons'>
        <a target="_blank" href="https://www.linkedin.com/in/sathish-reddy-1a466221b/"><img src={linkdin}  alt="" 
        className='icon'/></a>
        <a target="_blank" href="https://github.com/sathish-nalladevagari"><img src={github}  alt="" 
        className='icon'/></a>
        <a target="_blank" href="https://www.instagram.com/n_sathi04/"><img src={instagram}  alt="" 
        className='icon'/></a>
        
        <a target="_blank" href="https://twitter.com/Sathish69174295?t=vwBGOM-LRTMWhO6wFYxnPQ&s=09"><img src={twitter}  alt="" 
        className='icon'/></a>

        </div>

      </div>
    </div>
    </div>
  )
}

export default Home