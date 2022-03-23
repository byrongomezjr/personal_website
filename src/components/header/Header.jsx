import './header.css';

export default function Header() {
  return (
    <div className="header">
      <section className="headerTitle">
        <section className="headerTitleHello">
          Hello, I'm Byron.
        </section>
    </section>
    <section className="photoIcon">
        <img style={{width: 200, height: 200, borderRadius: 200/2}} 
    src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
    </section>
    </div>
  )
}
