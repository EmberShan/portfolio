// 
import styled from 'styled-components';
import c from '../components/Constant.scss';

// can pass in: row, dark 
export const FullPage = styled.div`
    height: 100vh;
    width: 100vw;
    // center
    display: ${(props) => (props.display ? props.display : 'flex')};
    flex-direction: ${ ({row}) => (row ? 'row' : 'column' ) };
    justify-content: center;
    align-items: center;

    background-color: ${ ({dark}) => (dark ? c.bg2 : c.bg1 ) };
    position: relative;

    overflow: hidden; 
    padding: ${(props) => (props.padding) ? (props.padding) : '0'};   

    @media screen and (min-width: 1140px) {
        scroll-snap-align: start;
    }
`

// can pass in: long, center, blue
export const Title = styled.h1`
    font-family: 'Squada One', sans-serif;
    font-size: ${ ({long}) => (long ? `2rem` : `3rem` ) };
    color: ${ ({blue}) => (blue ? c.font2 : c.font1 ) };
    // line-height: 2em;
    text-align: ${ ({center}) => (center ? 'center' : 'start' ) };
    margin-bottom: 0;

    @media screen and (min-width: 768px) {
        font-size: ${ ({long}) => (long ? `3rem` : `6rem` ) };
        line-height: 1.2em;
    }
    @media screen and (min-width: 1140px) {
        font-size: ${ ({long}) => (long ? `4rem` : `9rem` ) };
    }
`

// can pass in: blue, mobileCenter
export const SubTitle = styled.h2`
    font-family: 'Squada One', sans-serif;
    font-size: 1.2rem;
    color: ${ ({blue}) => (blue ? c.font2 : c.font1 ) };    
    text-align: ${ ({mobileCenter}) => (mobileCenter ? `center` : `start` ) };
    line-height: 1.5em;

    @media screen and (min-width: 768px) {
        font-size: 2rem;
        text-align: ${ ({center}) => (center ? `center` : `start` ) };
    }
`

export const Email = styled.span`
    mix-blend-mode: screen;
    a{
        list-style: none;
        text-decoration: none;
        color: ${c.font1};
        font-size: 2rem; 
        color: c.$font2;
    }
    i{
        padding-right: 10px;
        color: ${c.font2};
    }

    @media screen and (max-width: 768px) {
        a{
            font-size: .8rem;
        }
    }
`

// can pass in: rotate
export const Arrow = styled.span`
    i{
        margin-top: 3rem;
        font-size: 3rem;
        color: ${c.font2};
        mix-blend-mode: screen;
        transform: ${ ({rotate}) => (rotate ? 'rotate(180deg)' : 'rotate(0)' ) };
        transition: color .4s ease; 
    }

    &:hover{
        i{
            color: red; 
        }
    }

    @media screen and (min-width: 768px) {
        i{
            font-size: 4rem;
        }
    }
`

// can pass in: mobile_hide, grid, column
export const Container = styled.div`
    //center
    width: auto;
    height: auto;
    margin: 0 auto;
    flex-direction: ${ ({row}) => (row ? 'row' : 'column' ) };
    justify-content: center;
    align-items: center;
    display: ${ ({grid}) => (grid ? 'grid' : 'flex' ) };

    
    @media screen and (max-width: 768px) {
        display: ${ ({mobile_hide}) => (mobile_hide ? 'none' : ({grid}) => (grid ? 'grid' : 'flex' ) ) };
    }

`


export const Icon = styled.div`
    display: flex;
    width: 100%;
    color: c.$font2;
    max-width: 100%;
    padding: 0 10%;
    justify-content: center;
    gap: 2%;

    img{
        object-fit: contain;
        max-width: ${(props) => (props.amount > 4) ? (100/props.amount + '%') : (80/props.amount + '%')};
        mix-blend-mode: exclusion;
    }

    @media screen and (min-width: 768px) {
        gap: ${(props) => (props.amount > 4) ? '2%' : '5%'};
        img{
            max-width: ${(props) => (props.amount > 4) ? (80/props.amount + '%') : (45/props.amount + '%')};
        }
    }
    @media screen and (min-width: 1140px) {
        img{
            max-width: ${(props) => (props.amount > 4) ? (60/props.amount + '%') : (40/props.amount + '%')};
        }
    }
`

export const VideoContainer = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

// bgColor, objectFit
export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: ${(props) => (props.objectFit) ? (props.objectFit) : 'cover'}; 
    object-fit: ${(props) => (props.objectFit) ? (props.objectFit) : 'cover'};
    background: ${(props) => (props.bgColor) ? (props.bgColor) : 'white'};
    object-position: ${(props) => (props.pos) ? (props.pos) : 'center'};

    @media screen and (max-width: 576px) {
        display: ${ ({mobile_hide}) => (mobile_hide ? 'none' : 'block')};
        object-position: center; 
    }
`

// can pass in: mobile_hide
export const FullHeightImg = styled.div`
    background: ${c.bg2};
    overflow: hidden;
    width: 100%;
    height: 100%;

    img{
        height: 100%;
        width: auto;
        object-fit: cover;
    }

    @media screen and (max-width: 768px) {
        display: ${ ({mobile_hide}) => (mobile_hide ? 'none' : 'block')};
    }
    
`


export const FullBgImg = styled.div`
    overflow: hidden;
    width: 100%;
    height: 100%;

    background: url(${(props) => (props.src) ? (props.src) : 'none'}); 
    background-position: ${(props) => (props.pos) ? (props.pos) : 'center'}; 

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`


export const popUpBox = styled.span`
    
`



export const Thumbnail = styled.div`
    height: 100vh;
    width: 100vw;

    display: flex; 
    align-items: center;

    background-color: ${ ({dark}) => (dark ? c.bg2 : c.bg1 ) };
    position: relative;

    overflow: hidden; 

    @media screen and (min-width: 1140px) {
        scroll-snap-align: start;
    }
     
    
    div{
        width: 100%; 
        display: flex; 
        justify-content: space-evenly; 
        align-items: flex-start;

        // thumbnails 
        .thumbnail{

            &.pointer:hover{
                cursor: pointer; 
            }

            width: 40%; 
            height: auto;
            max-height: 90%; 
            overflow: hidden; 

            display: flex; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center;
            
            img{
                width: 100%; 
                height: 50vh; 
                overflow: hidden; 
                object-fit: cover; 
                margin-bottom: 5%; 
             }
    
            h2{
                text-align: center; 
                font-size: 1.7rem; 
            }
            .small_title{
                font-size: 1rem; 
            }
            
            // button 
            span{
                height: 100%; 
                display: flex; 
                justify-content: start; 
                align-items: center; 
    
                a{
                    font-size: 1.4rem; 
                    padding: 10px 20px; 
                }
            }
    
        }
    
    }
    

    // on mobile
    @media screen and (max-width: 768px) {
        height: auto;

        div{
            width: 100%; 
            flex-direction: column; 
            justify-content: center; 
            align-items: center; 
            
            .thumbnail{
                width: 100%; 
                height: auto;
                margin-bottom: 10%; 
                h2{
                    text-align: center; 
                    font-size: 1.3rem; 
                }
            }
        }
    }

    
`