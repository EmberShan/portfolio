import {Top, Context, Summary, Content, ImgWrapper, Footer, GoToTop} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function MDP() {
  const navigate = useNavigate();

  return (

    <div id='mdp'>

        <GoToTop>
          <Link to="mdp">
              <i class="fa-solid fa-circle-arrow-up"></i> 
          </Link>
        </GoToTop>

        <Top className='mdp'>
            <div className='btnWrapper' style={{
                top: '10%', 
            }}>

                <button className="backBtn" onClick={() => navigate(-1)} > 
                    <i class="fa-solid fa-angle-left"></i>
                    <div className='mobile-hide'>Back</div>
                </button>  

            </div>

            <h1> Navigation App <br></br>for MotorCity Casino Hotel </h1> 
            <h2>  </h2>  
        </Top>


        <Context>
            <span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', 
                    }}> role </h2>
                    <p> UI Designer, Frontend Developer </p>
                </span>

                <span>
                    <h2 style={{
                        color: '#F1FAFF', }}> time </h2>
                    <p> 2022 Jan - now </p>
                </span>

            </span>
        </Context>


        <Summary dark>
            <div className='text'>
            <h2> Context Overview </h2>
            <p>  
                MotorCity Casino Hotel needs a navigation app for its 2-floor casino. 
                Users need to be able to locate important points of interest (bathroom for example), 
                and are able to find available slot machines with the games that they search for. 
            </p>
            </div>

            <div className='text'>
            <h2> Skills Utilized </h2>
            <p>  
                <ul>
                    <li> Figma </li>
                    <li> React </li>
                    <li> Android Studio </li>
                </ul> 
            </p> 
            </div>

            <div className='text'>
            <h2> Key Takeaways </h2>
            <p> 
                <ul>
                    <li> Understood that different user groups have different needs 
                        and how to make a trade-off between their different needs. </li>
                    <li> User Interface should never compete with the content </li>
                    <li> Importance of limiting functionalities/information 
                        on one screen to as little as possible </li>
                    <li> Utilized shadows to indicate different layers of elements </li>
                    <li> Indication of interactivity: using shadows and color (bright blue) </li>
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
            src={require('./imgs/mdp/1.jpg')} alt="Color styling guide"/>

            <ImgWrapper>

                <img src={require('./imgs/mdp/2.jpg')} alt=""/>
                <span> 
                    <h2> Main Screen </h2>
                    The Opacity of the search bar is low when not being focused to avoid blocking the map. 
                    <br></br>
                    <br></br>
                    To make sure that the users can understand the buttons, 
                    I utilized the Gestalt principles to group the “1F” and “2F” 
                    buttons together to tell the users that they serve as a toggle button. 
                </span>
            
            </ImgWrapper>


            <ImgWrapper>

                <img src={require('./imgs/mdp/3.jpg')} alt=""/>
                <span> 
                For new users who do not know what games to search for, 
                I added few points of interest on the map: bathroom, 
                exit, .... Users can click on the icons and navigate to those locations. 
                </span>
            
            </ImgWrapper>

            
            <ImgWrapper>
                
                <img src={require('./imgs/mdp/4.jpg')} alt=""/>
                <span> 
                <h2> Search Screen </h2>
                When the search bar is tapped, it will have an opacity of 100% for 
                users to see better. 
                <br></br>
                <br></br>
                For users who do not know what games to search for, 
                when tapping on the search bar, a list of the most popular games in 
                the casino will show up to give them hints. 
                </span>
            
            </ImgWrapper>


            <ImgWrapper>

                <img src={require('./imgs/mdp/5.jpg')} alt=""/>
                <span> 
                <h2> Search Results </h2>
                The search results will be divided into two floors. 
                Moving the buttons closer to the search results can help people to better understand 
                that they can search for slot machines on different floors. 
                <br></br>
                <br></br>
                Another very important design principle is to always give people an exit 
                door for any actions. So I put a clear cancel icon at the top right. 
                </span>
            
            </ImgWrapper>


            <ImgWrapper>

                <img src={require('./imgs/mdp/6.jpg')} alt=""/>
                <span> 
                <h2> Navigation Screen </h2>
                Again, always give the users a clear exit door. 
                The bright blue color for the exit button matches the color for the bathroom 
                and exit markers, indicating that they are all interactive. 
                The light orange color of the path draws attention and is complementary 
                to the blue map and other elements. 
                </span>
            
            </ImgWrapper>

            
        </Content>
        


        <Footer></Footer>

    </div>
  )
}