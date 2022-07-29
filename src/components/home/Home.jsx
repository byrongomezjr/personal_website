import Header from '../../components/header/Header';
//
import './home.css';


export default function Home() {
  return (
    <>
    <Header/>

    <div className="aboutMeWrapper">

    <header className="aboutMeHeaderContainer">

    <container className="aboutMeContainer">
    <h1 className="aboutMe">About Me</h1>
    
    <container className="bodyParagraph">
    <p className="paragraph">
    👋🏼  My interests range from mobile app and web development to machine learning.
    </p>

    <p className="paragraph">
    💻 I enjoy implementing clean design and building responsive applications.
    </p>

    <p className="paragraph2">
    🎓 Currently attending Rutgers, The State University of New Jersey - Newark, and usually spend most of my free time programming with friends.
    </p>
    </container>
    </container>


    <container className="skillsContainer">
    <h1 className="skills">Skills</h1>

    <container className="iconsContainer">
    <i className="fa-brands fa-html5"></i>
    <i className="fa-brands fa-css3"></i>
    <i className="fa-brands fa-js"></i>
    <i className="fa-brands fa-react"></i>
    <i className="fa-brands fa-node"></i>
    <i className="fa-brands fa-git-alt"></i>
    <i className="fa-brands fa-github"></i>
    <i className="fa-brands fa-npm"></i>
    <i className="fa-brands fa-python"></i>
    <i className="fa-brands fa-java"></i>
    <i className="fa-brands fa-vuejs"></i>
    <i className="fa-brands fa-aws"></i>
    </container>
    
    </container>
    </header>


    </div>

    </>
  )
}
