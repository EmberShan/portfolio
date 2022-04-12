import './Page.scss'; 

import React from 'react'
import Home from '../Home/index'
import Contact from '../Contact/index'
import UX from '../UX/index'
import UI from '../UI/index'
import Graphic from '../Graphic'
import Programming from '../Programming'
import Nav from '../../components/Nav/Nav'


const Page = () => {
  return (

    <div> 
      <Nav visible={true}/>
      <main>

      
      <Home />
      <UI />
      
      <Graphic />
      <UX />

      <Contact />

      </main>
    </div>
    
  )
}

export default Page
