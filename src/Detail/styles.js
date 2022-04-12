// list of componenets for constructing the detail page 
import styled from 'styled-components';
import c from '../components/Constant.scss';


export const Top = styled.div`
    background-size: cover; 
    height: 100vh;
    width: 100vw;
    text-align: center; 

    h1{
        padding-top: 3%; 
        color: #F1FAFF; 
    }
    h2{
        color: #F1FAFF; 
        font-size: 1.3rem; 
    }

    @media screen and (max-width: 768px) {
        background-position: center; 
    }
`

export const Context = styled.div`
    background-color: #003049; 
    color: #FDF0D5;
    font-family: 'Roboto', sans-serif;
    display: flex; 
    text-align: center; 
    flex-direction: column; 
    padding: 3% 0; 
    
    h1{
        padding-top: 5%; 
        font-family: 'Squada One', sans-serif;   
    }

    span{
        margin-top: 3%;
        display: flex; 
        flex-direction: row; 
        justify-content: space-around; 
        padding: 0 10%; 

        span{
            display: flex; 
            flex-direction: column; 
            justify-content: flex-start; 
            h2{
                color: #FFA00F; 
                font-weight: 300; 
                font-family: 'Squada One', sans-serif;
            }
            a{
                font-family: 'Squada One', sans-serif;   
                font-size: 2rem; 
                color: #F1FAFF;
                transition: color .4s ease; 

                &:hover{
                    color: red; 
                }
            }
            p{

            }
        }
    }
    

`

export const Summary = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex; 
    flex-direction: column; 
    padding: 5% 25%; 
    
    .text{
        line-height: 2; 

        h2{
            font-weight: 700; 
            color: ${ ({dark}) => (dark ? '#003049' : '#FFA00F' ) };
            font-size: 1.3rem;
            margin-top: 1rem; 
        }
    }

    img{
        width: 100%; 
        height: auto; 
    }


    @media screen and (max-width: 768px) {
        padding: 5% 10%;    
    }

    
`


export const Content = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex; 
    flex-direction: column; 
    padding: 0; 
    
    div{
        line-height: 2; 
        padding: 3% 20%; 

        h2{
            font-size: 2rem;
            font-family: 'Squada One', sans-serif;   
        }
        h3{
            font-weight: 700; 
            font-size: 1.2rem;
            margin-top: 2rem;
        }
    }

    img{
        width: 100%; 
        height: auto; 
        margin-bottom: 3%;
    }


    @media screen and (max-width: 1200px) {
        img{
            width: 100% !important; 
            height: auto; 
        }
    }

    
`


export const Footer = styled.div`
    background-color: #003049; 
    margin-top: 2%;
    padding: 4%;  
    text-align: center; 
    color: #FDF0D5; 

    &::after{
        content: "© Ember Shan - University of Michigan 2021"; 
    }
    

    @media screen and (max-width: 576px) {
        &::after{
            font-size: .7rem; 
        }
    }
    
`


export const VideoWrapper = styled.span`
    overflow: hidden;
    position: relative;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;

    padding: 5% 0; 
    margin: 0; 
    display: flex; 
    align-items: center; 
    gap: 20px; 
`



export const Video = styled.video`
    max-height: 80vh;
    width: auto; 
    max-width: 100vw; 
    
    -o-object-fit: ${(props) => (props.objectFit) ? (props.objectFit) : 'cover'}; 
    object-fit: ${(props) => (props.objectFit) ? (props.objectFit) : 'cover'};
    background: ${(props) => (props.bgColor) ? (props.bgColor) : 'white'};
    object-position: ${(props) => (props.pos) ? (props.pos) : 'center'};

    @media screen and (max-width: 576px) {
        display: ${ ({mobile_hide}) => (mobile_hide ? 'none' : 'block')};
        object-position: center; 
    }

`


export const ImgWrapper = styled.span`
    padding: 0 10%; 

    display: flex; 
    align-items: center; 
    justify-content: center; 
    flex-direction: row; 

    width: 100%; 
    gap: 30px;

    img{
        max-height: 95vh; 
        width: auto; 
        max-width: 45%; 
    }
      
    @media screen and (max-width: 576px) {
        flex-direction: column; 
        img{
            width: 100%; 
        }
    }
`



export const GoToTop = styled.div`
    position: fixed; 
    z-index: 1000; 
    bottom: 3%;  
    right: 3%; 
    mix-blend-mode: difference; 
    cursor: pointer; 

    a{
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        color: #FDF0D5; 
        text-decoration: none; 

        i{
            color: #FDF0D5; 
            font-size: 4rem; 
        }

        &:hover, &:active{
            color: red; 
            i{
                color: red; 
            }
        }
    }

    @media screen and (max-width: 768px) {
        a i{
            font-size: 3rem; 
        }
    }
    
`
