import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import { FullPage, Title, FullBgImg, Arrow } from '../../components/styles'
import Page3 from '../FrontEnd/index'
import { Link } from 'react-scroll';


const UI = () => {
  return (
    <>
      <FullPage dark id="ui">
        <Title> UI Designer </Title>
        <Title center long> 
            Detail-Oriented <br></br>
            Simplistic Design <br></br>
            Design for Users <br></br>
        </Title>

        <Link to="ui1" spy={true}>
          <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
        </Link>

      </FullPage>

      <Page1 />
      
      <Page3 />
      <Page2 />
    </>
    
  )
}

export default UI
