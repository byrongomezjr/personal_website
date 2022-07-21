import Header from '../../components/header/Header';
//
import './home.css';


export default function Home() {
  return (
    <>
    <Header/>

    <div className="wrapper">

    <header className="header">

    <container className="about-me-container">
    <h1 className="aboutMe">About Me</h1>
    
    <container className="body-container">
    <p className="paragraph">
    👋🏼 My interests range from mobile app and web development to machine learning.
    </p>

    <p className="paragraph">
    💻 Love implementing clean design and building responsive applications.
    </p>

    <p className="paragraph">
    🎓 Currently attending Rutgers, The State University of New Jersey - Newark, and usually spend most of my free time programming with friends.
    </p>
    </container>
    </container>


    <container className="skills-container">
    <h1 className="skills">Skills</h1>

    <container className="icons-container">
    <i className="devicons devicons-html5"></i>
    <i className="devicons devicons-css3"></i>
    <i className="devicons devicons-javascript"></i>
    <i className="devicons devicons-nodejs"></i>
    <i className="devicons devicons-git"></i>
    <i className="devicons devicons-github_badge"></i>
    <i className="devicons devicons-npm"></i>
    <i className="devicons devicons-python"></i>
    <i className="devicons devicons-django"></i>
    <i className="devicons devicons-java"></i>
    </container>
    
    </container>

    <container className="bottom-container">
    
    <h1 className="contactMe">Contact Me</h1>

    <container className="sub">Get In Touch...</container>

    <div className="left"></div>
    <div className="right"></div>
    </container>
    </header>


    </div>

    </>
  )
}
