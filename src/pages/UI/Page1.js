import React from 'react'
import {ui} from '../../imgs'
import { Thumbnail, SubTitle } from '../../components/styles'
import {Button} from '../../components/Button/Button';


const Page2 = () => {

  return (

      <Thumbnail id='ui1'> 
        <div>
          <span className='thumbnail'>
              <img src={require('../../imgs/pics/ui/mdp_mockup.png')}></img> 
              <SubTitle> Navigation App  </SubTitle>
              <SubTitle className='small_title'> for MotorCity Casino Hotel </SubTitle>
              <Button
                text="Learn More"
                pos={'relative'}
                route={'/mdp'}
              > </Button>
            </span>

            <span className='thumbnail'>
              <img src={require('../../imgs/pics/ui/320_mockup.png')}></img> 
              <SubTitle> Diet/Delivery App  </SubTitle>
              <SubTitle className='small_title'> graphic design course project </SubTitle>
              <Button
                text="Learn More" 
                pos={'relative'}
                route={'/rutabagga'}
              > </Button>
            </span>
        </div>

        
      </Thumbnail>

  )
}

export default Page2
