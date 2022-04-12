import {Top, Context, Summary, Content, ImgWrapper, Footer, GoToTop} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Rutabagga() {
  const navigate = useNavigate();

  return (

    <div id='rutabagga'>
        <GoToTop>
          <Link to="rutabagga">
              <i class="fa-solid fa-circle-arrow-up"></i> 
          </Link>
        </GoToTop>

        <Top className='rutabagga'>
            <div className='btnWrapper' style={{
                top: '10%', 
            }}>

                <button className="backBtn" onClick={() => navigate(-1)}> 
                    <i class="fa-solid fa-angle-left"></i>
                    <div className='mobile-hide'>Back</div>
                </button>  

            </div>

        </Top>


        <Context>
            <span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', 
                    }}> role </h2>
                    <p> UI Designer, Logo Designer </p>
                </span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', }}> Course </h2>
                    <p> Graphic Design </p>
                </span>

            </span>
        </Context>


        <Summary dark>
            <div className='text'>
            <h2> Context Overview </h2>
            <p>  
                A diet delivery company focuses on the idea of delivering fresh root vegetables 
                and reducing package waste. Students need to design a set of different screens for 
                the company's food ordering app. 
            </p>
            </div>

            <div className='text'>
            <h2> Skills Utilized </h2>
            <p>  
                <ul>
                    <li> Figma </li>
                    <li> Illustrator (logo design) </li>
                    <li> Color Theory </li>
                </ul> 
            </p> 
            </div>

            <div className='text'>
            <h2> Key Takeaways </h2>
            <p> 
                <ul>
                    <li> Utilizing grids to design clean and organized layouts </li>
                    <li> Built company identity through colors and logos </li>
                    <li> Atomic design (reusable UI elements and consistent headings and text) </li>
                </ul>
                
            </p>
            </div>

        </Summary>



        <Content style={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
        }}>

            <img style={{
                width: '75%', 
            }}
            src={require('./imgs/rutabagga/1.jpg')} alt="Color styling guide"/>


            <div> 
                <h2> Grid Layout </h2>
                <p>
                    The whole layout utilizes cards and shapes that are conventional 
                    to other apps in the industry to help people better understand the 
                    app without extra instructions. One screen will only display a limited 
                    amount of information (or cards in this case) to avoid overwhelming the users.
                </p>
            </div>


            <img src={require('./imgs/rutabagga/2.jpg')} alt=""/>


            <div> 
                <h2> Layout Grid </h2>
                <p>
                    Grid is utilized on all screens to make sure the layout is 
                    consistent. Below are only two examples of the layout grids 
                    used. As shown in the images, the left and right margins are 
                    the same throughout different screens. Titles and the top of 
                    the cards are also aligned.
                </p>
            </div>

            <img className='small-img'
                src={require('./imgs/rutabagga/5.jpg')} alt=""/>
            

            <img className='small-img'
                src={require('./imgs/rutabagga/3.jpg')} alt="">
            </img>

            <div> 
                <h1> Identity Guide: Logo and Colors </h1>
                <h3> Logo </h3>
                <p>
                The logo emphasizes the theme of environmentally friendly 
                (reduce packaging waste) and delivering fresh vegerables with care. 
                The contrast between the red color and the green background makes the logo very obvious. 
                The white bold text for “Rutabagga” is also very recognizable.
                </p>
            </div>

            <img className='small-img'
                src={require('./imgs/rutabagga/4.jpg')} alt="">
            </img>

            <div> 
                <h3> Color Harmony: triad </h3>
                <p>
                I chose this color scheme because purple represents rutabagga,
                green is suitable for the farmer theme, and orange can make important UI elemnents like buttons stand out.
                The color scheme overall is very simple and I mostly used this green color
                along with occasional uses of orange and purple for important elements and messages.
                </p>
            </div>

        </Content>


        <Footer></Footer>

    </div>

    )
}