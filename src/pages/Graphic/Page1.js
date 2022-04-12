import React from 'react'
import { FullPage, Title, Arrow, Container, Icon, SubTitle } from '../../components/styles'
import './Graphic.scss'
import {adobe} from '../../imgs';
import { Link } from 'react-scroll';


const Page1 = () => {
  return (
    <FullPage>
        <Title center> 
            Graphic Designer
        </Title>

        <Icon className='adobe-container' amount={adobe.length}>
            {adobe.map(( item, index ) => {
                return(
                <img className={item.name} key={index} src= {item.src} alt={item.name}/>
                )
            })}  
        </Icon>

        <SubTitle center long className='subtitle-margin' style={{marginTop: '3%'}}> 
            Contrast - Bold - Details - Gestalt  
        </SubTitle>
        
        <Link to="graphics1" spy={true}>
            <Arrow className='arrow'> <i class="fa-solid fa-circle-arrow-down"></i> </Arrow>
        </Link>

    </FullPage>
  )
}

export default Page1