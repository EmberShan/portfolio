import React from 'react'
import './Home.scss'
import {Title, FullPage, SubTitle, Arrow, Email, Container} from '../../components/styles'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <FullPage id='home' padding={'10%'}>
      <Container className='container'>

        <span className='school'> 
          <i class="fa-solid fa-location-pin"></i>
          University of Michigan - Ann Arbor
        </span>

        <div className='alignStart'>
          <Title className='title'> Ember Shan </Title>
          <SubTitle className='subtitle'> 
            - Frontend Developer - UI Designer <br></br>
            - UX Researcher - Graphic Designer <br></br>
          </SubTitle>

          <Email className='email'>
            <i class="fa-solid fa-envelope"></i>
            <a href="mailto: embershan3@gmail.com"> embershan3@gmail.com </a>
          </Email>
        </div>
        
      </Container>

      <div className='arrow-container'>
        <Link to="ui" spy={true}>
          <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
        </Link>
      </div>
      
    </FullPage>
  )
}

export default Home
