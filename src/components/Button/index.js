import styled from 'styled-components'
import c from '../Constant.scss';

export const LearnMore = styled.span`
    a{
        font-family: 'Squada One', sans-serif;
        text-decoration: none !important; 
        color: #FDF0D5 !important; 
        padding: 20px 30px;
        background-color: #FFA00F; 
        font-size: 1.5rem;

        transition: all ease 0.7s;
        box-shadow: inset 0.1px 0 0 0 #FFA00F;
        
        position: ${(props) => (props.pos ? props.pos : 'relative')};  
        top: ${(props) => (props.top ? props.top : '0')}; 
        left: ${(props) => (props.left ? props.left : '0')}; 

        &:hover, &:focus{
            box-shadow: inset 300px 0 0 0.1px #003049;
        }
    } 
`