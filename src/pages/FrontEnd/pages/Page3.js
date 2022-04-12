import React from 'react'
import { FullPage, Title, Arrow, Container, VideoBg } from '../../../components/styles'
import Video from '../../../imgs/videos/django.mp4'

const Page3 = () => {
  return (
    <FullPage row className='page3'>
        <Container className='text'>
            <div className='title-container'>
                <Title long className='title'> 
                    Dynamic Websites <br></br>
                    Login + Databases <br></br>
                    Animations <br></br>
                </Title>
            </div>
        
            <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
        </Container>

        <VideoBg 
          mobile_hide
          objectFit={'contain'}
          autoPlay={true} 
          loop={true}
          controls={false} 
          playsInline
          muted 
          src={Video}
          type="video/mp4" 
          style={{width: '40%'}}
        />
        
    </FullPage>
  )
}

export default Page3
