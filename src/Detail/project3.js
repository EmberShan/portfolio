import {Context, Summary, Content, Footer, ImgWrapper, GoToTop } from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Project3() {
  const navigate = useNavigate();

  return (
    
    <div id='project3'>

    <GoToTop>
        <Link to="project3">
            <i class="fa-solid fa-circle-arrow-up"></i> 
        </Link>
    </GoToTop>
      

      <Context>
        <div className='btnWrapper'>
          <button className="backBtn" onClick={() => navigate(-1)} > 
            <i class="fa-solid fa-angle-left"></i>
            <div className='mobile-hide'>Back</div>
          </button>  

          <h1> Heuristics Evaluation on Craiglist Website  </h1>
        </div> 
        
        <span>
          <span>
            <h2> role </h2>
            <p> UX Researcher </p>
          </span>

          <span>
            <h2> time </h2>
            <p> 2022 Mar </p>
          </span>
        </span>

      </Context>

      <Summary>
          <div className='text'>
            <h2> Course Project Context:  </h2>
            <p> 
                Craiglist, founded in 1995, utilized a website seems to be created in the 90s. 
                Though some may claim that their website is efficient in delivering the messages, 
                many people today find the website old-fashioned and overwhelming.
                <br></br>
                <br></br>
                As a group of 5 UX reseachers, we managed to find a total of 46 usability problems. 
                Here is the report.
            </p>
          </div>

          <div className='text'>
            <h2> Research Question:  </h2>
            <p> What are the issues of the Craiglist Website? </p> 
          </div>

          <div className='text'>
            <h2> Key Takeaways:  </h2>
            <p> 
                Always keep the 10 Heuristics Evaluations in mind when designing, 
                <br></br>
                Always give the user freedom when using our product, 
                <br></br>
                Combine all members' results together,
                <br></br>
                Communicate with group memebers       
            </p>
          </div>

      </Summary>


      <Content>

        <div>
            <h2> What is Heuristics Evaluation? </h2>
            <p> Evaluating designs using Jacob Nielsen's 10 general principles for interactive design. 

              <ol>
                <li> Visibility of system status </li>
                <li> Match between system and the real world  </li>
                <li> User Control and freedom </li>
                <li> Consistency and standards </li>
                <li> Error prevention  </li>
                <li> Recognition Rather than Recall </li>
                <li> Flexibility and efficiency of use </li>
                <li> Aesthetic and Minimalist Design </li>
                <li> Help users recognize, diagnose, and recover from errors </li>
                <li> Help and Documentation </li>
              </ol>
              
            </p>
          </div>

          <div>
            <h2> 1. Top Issue: Bad Visual Hierarchy </h2>
            <p> The website did not achieve 'Recognition Rather than Recall'.
                The whole interfaces gives a feeling of it being suspicious and crowded. 
                A new user would not know where to look at. Old users who are familiar with 
                the interface also needs to recall rather than recognize which page they want to go. 
            </p>
          </div>
          <img src={require('./imgs/project3/1.png')} alt="Craiglist website overview"/>

          <div>
            <h3> Suggestion </h3>
            <p> 
                Utilize white space, colors, and font sizes. 
                Give each section some padding around. Make the titles having a different color.
            </p>
          </div>


          <div>
            <h2> 2. Fake buttons and links </h2>
            <p> 
                <strong>Heuristics issue:</strong> User control and freedom
                <br></br>
                <br></br>
                The continue button on the create a job posting page is not working. 
                If you select any of the options, the page will automatically go to 
                the next page. Giving people an option to continue will make them 
                confused if they could go to the next page without answering the questions.
                <br></br>
                <br></br>
                <strong>Suggestion:</strong> Remove the unnecessary button to avoid confusing users. 
            </p>
          </div>

          <img src={require('./imgs/project3/2.png')} alt="useless button"/>


          <div>
            <h2> 3. Too many Abbreviations </h2>
            <p> 
                <strong>Heuristics issue:</strong> Match between system and the real world
                <br></br>
                The website uses too many abbreviations that a new user would not understand.
                <br></br>
                <strong>Suggestion:</strong> Do not use abbreviations. 
            </p>
          </div>

          <img src={require('./imgs/project3/3.png')} alt="abbreviations"/>


          <div>
            <h2> 4. Inconsistent and Confusing </h2>
            <p> 
                <strong>Heuristics issue:</strong> Consistency and standards
                The whole website is filled with inconsistent stylings and organizations.
            </p>
          </div>

          <ImgWrapper sm_mobile>
                
                <img src={require('./imgs/project3/4.png')} alt=""/>
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


            <ImgWrapper sm_mobile>
                
                <img src={require('./imgs/project3/5.png')} alt=""/>
                <span> 
                    The whole section consists of many different 
                    items that does not make sense to be grouped together.
                    It also does not make sense to put this section on the 
                    left-side of the website. Some of the sections like the “about 
                    craiglist” should be put on the footer which is a standard for most websites.
                </span>
            
            </ImgWrapper>


            <div>
            <h2> 4. Next Step </h2>
            <p> 
                The whole website contains many information and it is a challenge to 
                reorganize the website and make some changes. The website right now does 
                serve its purpose, but it probably would not attract any new users. 
                Changing the website more modern-looking would benefit the company a 
                lot and make the company more reliable. Removing fake links and buttons can 
                also improve the experience of old users. Overall, there are many changes 
                needed to be made for this website.
            </p>
          </div>

        
        <div>
            <h2> All 46 non-repeating issues found by our group here: </h2>
        </div>
        <img src={require('./imgs/project3/appendix.png')} alt=""/>

      </Content>


      <Footer></Footer>

    </div>
  )
}

