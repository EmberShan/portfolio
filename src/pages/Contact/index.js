import React from 'react'
import {FullPage, Title, Arrow, Email} from '../../components/styles'
import './Contact.scss'
import { Link } from 'react-scroll';


const Contact = () => {
  return (
    <FullPage dark id="contact">
      <Title> Contact Me </Title>

      <Email className='email'>
        <i class="fa-solid fa-envelope"></i>
        <a href="mailto: embershan3@gmail.com"> embershan3@gmail.com </a>
      </Email>

      <Link to="home" spy={true}>
        <Arrow rotate className='arrow'> 
          <i class="fa-solid fa-circle-arrow-down"></i> 
        </Arrow>
      </Link>
      
    </FullPage>
  )
}

export default Contact
