import Header from '../../components/header/Header';
//
import './home.css';

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">

    <div className="main">

    

    <div className="section">

    <h1 className="aboutMe">About Me</h1>
    
    <p className="paragraph">
    👋🏼 Hi there, I am a software developer with interests that range from web development to machine learning.
    </p>

    <p className="paragraph">
    💻 Love creating responsive applications by implementing clean design and experimenting with trendy technologies.
    </p>

    <p className="paragraph">
    🎓 Currently attending Rutgers, The State University of New Jersey - Newark, and usually spend most of my free time programming with friends.
    </p>

    </div>


    <div className="title">Skills</div>

    <div className="icons">
    <i className="fa-brands fa-html5"></i>
    <i className="fa-brands fa-css3-alt"></i>
    <i className="fa-brands fa-js-square"></i>
    <i className="fa-brands fa-react"></i>
    <i className="fa-brands fa-git-square"></i>
    <i className="fa-brands fa-python"></i>
    <i className="fa-brands fa-java"></i>

    </div>

    <div className="bottomSection">
    
    <div className="contactMe">Contact Me</div>

    <subheading className="sub">Get In Touch...</subheading>

    <div className="left"></div>
    <div className="right"></div>
    

    </div>


    </div>

    </div>
    </>
  )
}
