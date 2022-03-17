import Header from '../../header/Header';
import './home.css';

export default function Home() {
  return (
    <div className="home">
    <Header/>


    <div className="introTitle">Quick Introduction...</div>
    

    <div className="intro">
    
    <p className="introParagraph">
    👋 Hi there, I am a Computer Science student,
    </p>

    <p className="introParagraph">
    🏢 Currently working at Vitalant
    </p>

    <p className="introParagraph">
    🏬 Student at Rutgers University - Newark.

    </p>

    <p className="introParagraph">
    💻 Currently learning React and JavaScript.
    </p>

    <p className="introParagraph">
    🧍🏽🧍🏽‍♂️ Looking to collaborate with other Front-End Developers and Software Engineers.
    </p>
    </div>

    <div className="personalGoalsTitle">Personal Goals</div>
    <p className="introParagraph">My personal goals consist of...
    </p>

    <div className="personalContact">Contact</div>
    <p className="introParagraph">Shoot me and e-mail...
    </p>

    <p>
    <i className="eMailIcon fa-solid fa-envelope"></i>
    <a className="eMail" href="mailto:byrongomezjr@protonmail.com">byrongomezjr@protonmail.com</a>
    </p>

    </div>
  )
}
