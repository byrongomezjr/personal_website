import './header.css';

export default function Header() {
  return (
    <div className="header">

    <container className="main">
          
          <section>
          <h1 className="hello">Hello, I'm Byron.</h1>
          <section>
          <div className="bio">
          <a className="developer">Software Developer based in New Jersey</a>
          </div>

          <div className="avatar">
          <img style={{width: 320, height: 320, borderRadius: 320/2}} 
          src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
          </div>

          </section>
          
          
          </section>

    </container>
    
    </div>
  )
}
