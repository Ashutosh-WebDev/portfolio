import'./script';
import'./home.css';
// function myFunction() {
//   var x = document.getElementById("myTopnav");
//   if (x.ClassName === "nav_bar") {
//     x.ClassName += " responsive";
//   } else {
//     x.ClassName = "topnav";
//   }
// }
function home() {
  return (
    <>
      <div class="BG">
          <div class="stars"></div>
        <div class="twinkling"></div> 
       <div class="clouds"></div>
       </div>
    <body class="backG">
      <div class="top_area">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"/>
        <div className='fix'>
        <img className="logo" src={require('./logo.png')}/>
        <div class='nav_bar' id="myTopnav">

          <div className='nav_comp' id='home'>
           <a href='#role'>HOME</a>
          </div>
          <div className='nav_comp'>
            <a href='#about_me_sec'>ABOUT ME</a>
          </div>
          <div className='nav_comp'>
            <a href='#portfolio'>PORTFOLIO</a>
          </div>
          <div className='nav_comp' id='hide'>
            <a href='#services'>SERVICES</a>
          </div>
          <div className='nav_comp'>
            <a href='#experience'>EXPERIENCE</a>
          </div>
          <div className='nav_comp' id='contact'>
            <a href='#CONTACT'>CONTACT</a>
          </div>
          {/* <a href="javascript:void(0);" class="icon" onclick={myFunction()}>&#9776;</a> */}
        </div>
        </div>
        <p>
        I'm a
        </p>
        <p id='role'> 
          FULL STACK 
          SOFTWARE
          DEVELOPER.
        </p>
      </div>
      <div id='about_me_sec'>
        {/* <div className='about_me_contain'> */}
          <div className='container'>
          <img className="profile" src={require('./profile.jpeg')}/>
            <div className='square'>
              <div className='square_in'>
              </div>
            </div>
          </div>
        {/* </div> */}
        {/* <div className='about_me_contain'> */}
          <div className='About'>
            <h1>ABOUT ME</h1>
            I am Ashutosh Panda,B.Tech graduate from National Institute of Technology, Rourkela.I am proficient in MERN-stack(Web-Development) with hands on knowlege on socket, AI-integration and API integration. I provide complete end-to-end solution to all web related needs. 
            <br/>
            <button className='button' id='hire_me'><a href='https://www.linkedin.com/in/ashuatp/'>HIRE ME</a></button>
            <button className='button' id='resume'><a href='https://drive.google.com/file/d/1xDGhdBhPyKf0olDWs6tMxsftakwiakDz/view?usp=drive_link'>RESUME</a></button>
          </div>
        {/* </div> */}
      </div>
      <div id='portfolio'>
          PORTFOLIO
        <div className='contain'>  
          <div className='cotainer_portfolio' id='container_1'>
            <a href='#ID1'>SNAPPY</a>
          </div>
          <div className='cotainer_portfolio'>
          <a href='#ID2'>PORTFOLIO</a>
          </div>
          {/* <div className='cotainer_portfolio'>
          <a href='#ID3'>SNAPPY</a>
          </div>
          <div className='cotainer_portfolio'>
          <a href='#ID4'>SNAPPY</a>
          </div> */}
        </div>
      </div>  
      <br/>
      <br/>
      <div className='projects'>
      <div className='project'id='ID1'>
        <div className='contain_project'>
          <h1 className='PROJECT_NUM' ><a href='https://app-chat-frontend-xdlm.onrender.com'>PROJECT 1 </a></h1>
          <h1  className='PROJECT_NAME'><a href='https://app-chat-frontend-xdlm.onrender.com'>SNAPPY </a></h1>
          <div className='para'>
          SNAPPY- an anonymous chat app where you browse through a list of strangers, speak your heart out and let your mind to rest. I have used socket.io as my chat server and MERN as the tech-stack. I have used bcrypt as encoding for passwords and any confidencial information saved in database.
          </div>
        </div>
        <div className='container_pro'>
          <img className="project_image" src={require('./PROJECT-1.png')}/>
            <div className='square_project'>
              <div className='square_in_project'>
              </div>
            </div>
          </div>
      </div>
      <div className='project' id='ID2'>
        <div className='container_pro'>
          <img className="project_image" src={require('./PROJECT-2.png')}id='project_image'/>
            <div className='square_project'id="square_project">
              <div className='square_in_project'id="square_in_project">
              </div>
            </div>
          </div>
          <div className='contain_project'>
          <h1 className='PROJECT_NUM' ><a href='https://portfolio-ashutosh-hj6j.onrender.com/'>PROJECT 2</a></h1>
          <h1  className='PROJECT_NAME'><a href='https://portfolio-ashutosh-hj6j.onrender.com/'>PORTFOLIO</a></h1>
          <div className='para'>
          PORTFOLIO- a static web-site containing all my creations ,hobby and joy. Made with REACTJS and deployed using render.com. Design constatly inspired and constantly changing like the twikling stary night background.
          </div>
        </div>
      </div>
      <div className='project' id='ID3'>
        <div className='contain_project'>
          <h1 className='PROJECT_NUM' >PROJECT 3</h1>
          <h1  className='PROJECT_NAME'>SNAPPY</h1>
          <div>
          SNAPPY- an anonymous chat app where you browse through a list of strangers, speak your heart out and let your mind to rest. I have used socket.io as my chat server and MERN as the tech-stack. I have used bcrypt as encoding for passwords and any confidencial information saved in database.
          </div>
        </div>
        <div className='container'>
          <img className="project_image" src={require('./PROJECT-1.png')}/>
            <div className='square_project'>
              <div className='square_in_project'>
              </div>
            </div>
          </div>
      </div>
      <div className='project' id='ID4'>
        <div className='container'>
          <img className="project_image" src={require('./PROJECT-1.png')}/>
            <div className='square_project'>
              <div className='square_in_project'>
              </div>
            </div>
          </div>
          <div className='contain_project'>
          <h1 className='PROJECT_NUM'>PROJECT 4</h1>
          <h1  className='PROJECT_NAME'>SNAPPY</h1>
          <div>
          SNAPPY- an anonymous chat app where you browse through a list of strangers, speak your heart out and let your mind to rest. I have used socket.io as my chat server and MERN as the tech-stack. I have used bcrypt as encoding for passwords and any confidencial information saved in database.
          </div>
        </div>
      </div>
      </div>
      <div id='services'>
        SERVICES
      </div>
      <div>
        <div className='services_container'>
            <div className='services_card'>
              <img className="logo" src='/image/logo.jpg'/>
              <h1>lorem ipsum</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='services_card'>
              <img className="logo" src='/image/logo.jpg'/>
              <h1>lorem ipsum</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>
        <div className='services_container'>
            <div className='services_card'>
              <img className="logo" src='/image/logo.jpg'/>
              <h1>lorem ipsum</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div className='services_card'>
              <img className="logo" src='/image/logo.jpg'/>
              <h1>lorem ipsum</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
        </div>

      </div>
      <div id='experience'>
        EXPERIENCE
      </div>
      <div className='exp_contain'>
        <div className="exp_comp">
          <img className="aws" src={require('./aws.png')}/>
          <br/>
          AWS
        </div>
        <div className="exp_comp">
          <img className="css" src={require('./css.png')}/>
          <br/>
          CSS
        </div>
        <div className="exp_comp">
          <img className="react" src={require('./react.png')}/>
          <br/>
          REACT
        </div>
        <div className="exp_comp">
          <img className="html" src={require('./html.png')}/>
          <br/>
          HTML
        </div>
      </div>
      <div className='exp_contain'>
        <div className="exp_comp">
          <img className="js" src={require('./js.png')}/>
          <br/>
          JAVA-SCRIPT
        </div>
        <div className="exp_comp">
          <img className="node" src={require('./node.png')}/>
          NODE.JS
        </div>
        <div className="exp_comp">
          <img className="cpp" src={require('./c_p_p.png')}/>
          C++
        </div>
        <div className="exp_comp">

        </div>
      </div> 
      <div id='CONTACT'>
        <div className='circle'>
          <div className='circle_1'>
          </div>
          <div className='circle_2'>
          </div>
        </div>
        <div className='adjust'>
        </div>
        <div className='actual_contact'>
          <h3><br/>CONTACT</h3>
          <div className='contact_info'>
            <div className='left'>
              <div>
                <h4>Drop Me a Message</h4>
                Fell free to mail me or text me over whatsapp.I will revert back as soon as i can.
                Please do not call during weekdays.Looking forward to collaborative opportunities and exciting growth together with the community.
                <br/>
                <img className="logo" src={require('./logo.png')}/>
                +91 9040499041
                <br/>
                <img className="logo" src={require('./logo.png')}/>
                ashutoshpandaweb@gmail.com
                <br/>
                <img className="logo" src={require('./logo.png')}/>
                LCR/479, Chhend-Colony, Rourkela, 769015, Sundagardh, Odisha.
              </div>
            </div>
            <div className='right'>
              <div className='bg'>
                <div className='mail_box'>
                  <input type="text" id="name" name="name" placeholder='Name' />
                  <input type="text" id="email" name="email" placeholder='Email' />
                  <input type="text" id="message" name="message" placeholder='Message'/>
                  <input type="button" id="submit" name="submit" value='Send'/>
                </div>
              </div>
            </div>
          </div>
          <div className='bar'>
            </div>
          <div className='cont_bottom'>
          <img className="logo" src={require('./logo.png')}/>
          <div className='socials'>
            <div>
              <img className="fb" src={require('./fb.png')}/>
            </div>
            <div>
              <img className="insta" src={require('./insta.png')}/>
            </div>
            <div>  
              <img className="linkedin" src={require('./linkedin.png')}/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </body> 
    </>
  )
};

export default home;