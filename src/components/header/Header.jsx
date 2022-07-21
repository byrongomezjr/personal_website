import './header.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Header() {
  return (
    <div className="top">
    <header className="header">
    
    <container className="container">
    <h1 className="hi">Hi, my name is</h1>
    <h2 className="name">Byron Gomez.</h2>
    <h3 className="developer">I'm a Software Developer</h3>
    <h3 className="developer">specializing in exceptional digital experiences,</h3>
    <h3 className="developer">I build accessible, human-centered products that leave a great impression. this is to say the least blah ksle dsdsssl dkfkslswwdf</h3>
    </container>


          <container className="avatar">
          <img style={{width: 320, height: 320, borderRadius: 320/2}} 
          src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
          </container>


    </header>
    </div>
  )
}
