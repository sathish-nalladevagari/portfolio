import React from 'react'
import About from '../sections/About/About'
import Home from '../sections/Home/Home'

import Projects from '../sections/Projects/Projects'
import Contact from '../sections/Contact/Contact'

function Detail() {
  return (
    <div>
      <section><Home /></section>
      <section><About /></section>
      
      <section><Projects/></section>
      <section><Contact/></section>
    </div>
  )
}

export default Detail