import {Context, Summary, Content, Footer, GoToTop} from './styles';
import './detail.scss'

import { Link } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

export default function Project2() {
  const navigate = useNavigate();

  return (
    
    <div id='project2'>

      <GoToTop>
          <Link to="project2">
              <i class="fa-solid fa-circle-arrow-up"></i> 
          </Link>
      </GoToTop>
      
      <Context>
        <div className='btnWrapper'>
          <button className="backBtn" onClick={() => navigate(-1)} > 
            <i class="fa-solid fa-angle-left"></i>
            <div className='mobile-hide'>Back</div>
          </button>  

          <h1> UX research on self-checkout system  </h1>
        </div> 
        
        <span>
          <span>
            <h2> role </h2>
            <p> UX Researcher </p>
          </span>

          <span>
            <h2> time </h2>
            <p> 2022 Feb - Apr </p>
          </span>
        </span>

      </Context>

      <Summary>
          <div className='text'>
            <h2> Course Project Context:  </h2>
            <p> a local grocery store wanted to know if to implement a self-checkout system </p>
          </div>

          <div className='text'>
            <h2> Research Question:  </h2>
            <p> What are the pros and cons of a self-checkout system from the shoppers' perspective?  </p> 
          </div>

          <div className='text'>
            <h2> Key Takeaways:  </h2>
            <p> Communication with participants, Coordination within a team, 
              Understand people's behavior under certain situations, 
              Understand the difference between people's expectations and their actual behaviors </p>
          </div>

      </Summary>


      <Content>

          <div>
            <h2> 1. Assumptions &amp; Questions </h2>
            <p> Before conducting interviews and surveys, 
              it is important to have some general ideas of what we are looking at. 

              <ul>
                <li> Time efficiency </li>
                <li> COVID </li>
                <li> Human Interaction </li>
                <li> Amount of items bought </li>
              </ul>
              
            </p>
          </div>

          <div>
            <h2> 2. Interview </h2>
            <p> 
                <h3> Interview Guide: </h3>  
                Designing an interview guide with questions to ask is important to mitigate bias. 
                We aim to let the participants talk more by asking them grand tour, experience, 
                and example questions. We also anticipated different answers and came up with different follow-up questions. 

                <h3> Conducting Interview:  </h3>
                We are cautious about showing enthusiasm to our participants but not suggesting 
                any answers. We let them talk about their feelings and opinions and took notes. 

                <h3> Analyzing Data:  </h3>
                We highlighted multiple important interview notes and tried to analyze the notes 
                in terms of the participants' behavior, value, and beliefs. 
                Together in a team, we created affinity diagram and try to 
                extract the common theme behind the notes. 
            </p>
          </div>

          <img src={require('./imgs/project2/1.png')} alt="Miro affinity diagram"/>


          <div>
            <h2> 3. Survey </h2>
            <p> 
              Using the data we got from interviews, we now have a general 
              idea of what factors people would consider when choosing 
              between a self-checkout and cashiers. We used the information 
              to construct several survey questions that we want to ask the participants. 
            </p>
          </div>

          <img src={require('./imgs/project2/2.png')} alt="Miro affinity diagram"/>

          <div>
            <p> 
            After the survey, we created diagrams from the responses to 
            compare different questions and create links between the answers. 
            This helps us to see the bigger picture. 
            </p>
          </div>

          <img style={{
            width: '80%', 
            alignSelf: 'center', 
          }}
          src={require('./imgs/project2/3.png')} alt="Miro affinity diagram"/>

          <div>
            <h2> 4. Personas </h2>
            <p> 
            For our final step, we created personas 
            and scenarios to reflect different findings from our survey and interviews. 
            </p>
          </div>

          <img src={require('./imgs/project2/4.png')} alt="Miro affinity diagram"/>

          <div>
            <h2> Conclusions </h2>
            <p> 
              <ul>
                <li> 
                  Students generally have a better opinion with self-checkout system, 
                  even though most of them experienced difficulties when checking out 
                </li>
                <li> 
                  Half of the students would rank time efficiency as their 
                  most important factor when choosing between machine and cashiers
                </li>
                <li> 
                  Student will balance between different factors when choosing the checkout method: 
                  <ul>
                    <li> Human interaction  </li>
                    <li> Amount of items bought  </li>
                    <li> Waiting Lines </li>
                    <li> Type of items bought (fresh produce etc) </li>
                    <li> Convenience  </li>
                  </ul>

                </li>
              </ul>
            </p>
          </div>

      </Content>


      <Footer></Footer>

    </div>
  )
}

