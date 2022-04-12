import React from 'react';
import {FullPage, VideoContainer, VideoBg, Title} from '../../components/styles';
import Video from '../../imgs/videos/Impressionism.mp4';
import {Button} from '../../components/Button/Button';

import './ui.scss'

const Page2 = () => {
  return (
    <FullPage className='page2' id="impressionism">

        <span className='side'>
          <Title long className='title'> 
            Responsive Website on <br></br>
            Mobile, Tablet, and Desktop
          </Title>
          
          <Button pos={'relative'} className="learnmore" text="Learn More" route={'/impressionism'}> </Button>
        </span>

      <VideoContainer>
        <VideoBg 
          autoPlay={true} 
          loop={true}
          controls={false} 
          playsInline
          muted 
          src={Video}
          type="video/mp4" 

          className='video'
        />
        
      </VideoContainer>
    </FullPage>
  )
}

export default Page2
