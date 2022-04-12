import React from 'react'
import './UX.scss'
import { SubTitle, Title, Thumbnail } from '../../components/styles'
import {Button} from '../../components/Button/Button';


const UX = () => {



  return (
    <Thumbnail id='ux' style={{
      flexDirection: 'column', 
      alignItems: 'center', 
      padding: '5%', 
    }}> 
        <Title style={{
          fontSize: '2.5rem', 
          marginBottom: '3%', 
          marginTop: '5%', 
        }}> UX Researcher </Title>

        <div>
          <span className='thumbnail'>
              <img src={require('../../imgs/pics/ux/thumb1.png')}></img> 
              <SubTitle style ={{fontSize: '1.3rem'}}> UX Research on shopping behavior  </SubTitle>
              <SubTitle className='small_title'> Interviews, Surveys, Analysis </SubTitle>
              <Button
                text="Learn More"
                pos={'relative'}
                route={'/project2'}
              > </Button>
            </span>

            <span className='thumbnail'>
              <img src={require('../../imgs/pics/ux/thumb2.png')}></img> 
              <SubTitle style ={{fontSize: '1.3rem'}}> Heuristics Evaluation  </SubTitle>
              <SubTitle className='small_title'> Craiglist Website </SubTitle>
              <Button
                text="Learn More"
                pos={'relative'}
                route={'/project3'}
              > </Button>
            </span>
        </div>

        
    </Thumbnail>
  )
}

export default UX
