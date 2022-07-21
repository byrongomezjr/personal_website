import './header.css';
/* eslint-disable jsx-a11y/anchor-is-valid */

export default function Header() {
  return (
    <div className="header">

    <container className="main-container">
          
          <section>
          <div>
          <h1 className="hi">Hi, my name is</h1>
          </div>
          <div>
          <h2 className="name">Byron Gomez.</h2>
          </div>
          <h3 className="developer">I'm a Software Developer specializing in exceptional digital experiences, I build accessible, human-centered products that leave a great impression.</h3>

          <div className="avatar">
          <img style={{width: 320, height: 320, borderRadius: 320/2}} 
          src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
          </div>
          
          
          </section>

    </container>
    
    </div>
  )
}
