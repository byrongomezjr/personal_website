import Header from '../../components/header/Header';
//
import './home.css';


export default function Home() {
  return (
    <>
    <Header/>
    <div className="header">

    <div className="main">


    <section className="main-body-container">
    <h1 className="aboutMe">About Me</h1>
    
    <section className="body-container">
    <p className="paragraph">
    👋🏼 My interests range from mobile app and web development to machine learning.
    </p>

    <p className="paragraph">
    💻 Love implementing clean design and building responsive applications.
    </p>

    <p className="paragraph">
    🎓 Currently attending Rutgers, The State University of New Jersey - Newark, and usually spend most of my free time programming with friends.
    </p>
    </section>
    </section>


    <section className="secondary-container">
    <h1 className="skills">Skills</h1>

    <section className="icons">
    <i className="devicons devicons-html5"></i>
    <i className="devicons devicons-css3"></i>
    <i className="devicons devicons-javascript"></i>
    <i className="devicons devicons-react"></i>
    <i className="devicons devicons-nodejs"></i>
    <i className="devicons devicons-git"></i>
    <i className="devicons devicons-github_badge"></i>
    <i className="devicons devicons-npm"></i>
    <i className="devicons devicons-python"></i>
    <i className="devicons devicons-django"></i>
    <i className="devicons devicons-java"></i>
    

    </section>
    </section>

    <section className="bottom-container">
    
    <h1 className="contactMe">Contact Me</h1>

    <subheading className="sub">Get In Touch...</subheading>

    <div className="left"></div>
    <div className="right"></div>
    </section>


    </div>
    </div>

    </>
  )
}
