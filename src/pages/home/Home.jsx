import Header from '../../components/header/Header';
import './home.css';

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">


    <div className="introTitle">Quick Introduction...</div>
    

    <div className="intro">
    
    <p className="introParagraph">
    👋🏼 Hi there, I am a Computer Science student living in New Jersey,
    </p>

    <p className="introParagraph">
    🏬 Rutgers University - Newark,

    </p>

    <p className="introParagraph">
    🏢 Employed at Vitalant.
    </p>

    <p className="introParagraph">
    💻 Currently learning React and JavaScript;
    </p>

    <p className="introParagraph">
    🧍🏽🧍🏽‍♂️ Looking to collaborate with other Front-End Developers and Software Engineers.
    </p>
    </div>

    <div className="personalGoalsTitle">Personal Commandments</div>
    <p className="introParagraphTwo">
    "Negativity is a choice."
    </p>
    <p className="introParagraph">
      I've always had a specific view toward life and believe that negative thinking and weighted thoughts keep everyone I've come across in the same spot. I look at it as a clock, this might be sort of weird but it is my personal approach because I believe that a clock only moves at 180 degrees, going in circles and never moving forward, like an illusion; but time still passes by.
    </p>
    <p className="introParagraph">
      Now, if everyone was to change the way they think and see things in general, they would no longer be stuck in a 180 going in circles like a clock. Instead, proposing to only move forward and take different approaches that will get rid of negative thoughts; then everyone would witness the meaning of life and their careers would also become meaningful. A meaningful life, only moving forward and able to enjoy freedom and time, but most importantly the way they see and perceive their own selves.
    </p>

    <p className="introParagraphThree">
    "Natural human tendency is wishful thinking."
    </p>
    <p className="introParagraph">
    In the words of Elon Musk, he encourages everyone to be extremely tenacious but know the difference between really believing our own ideals and sticking to them versus pursuing an unrealistic dream that doesn't actually have merit. This is very important because I believe that it keeps ourselves grounded when pursuing anything in life.
    </p>

    <div className="personalContact">Get In Touch With Me...</div>
    <p className="introParagraph">Shoot me an e-mail!
    </p>

    <p>
    <i className="eMailIcon fa-solid fa-envelope"></i>
    <a className="eMail" href="mailto:byrongomezjr@protonmail.com">
    byrongomezjr@protonmail.com
    </a>
    </p>

    </div>
    </>
  )
}
