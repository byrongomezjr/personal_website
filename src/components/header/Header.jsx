import './header.css';

export default function Header() {
  return (
    <div className="header">

    <container className="mainContainer">
          
          <section className="photoIcon">
          <h1 className="hello">Hello, I'm Byron.</h1>
          
          <img style={{width: 200, height: 200, borderRadius: 200/2}} 
          src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
          </section>
    </container>
    
    </div>
  )
}
