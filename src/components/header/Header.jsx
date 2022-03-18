import './header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerTitleHello">
          Hello, I'm Byron.
        </span>
        <div className="photoIcon">
        <img style={{width: 100, height: 100, borderRadius: 100/2}} 
    src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
    </div>
    </div>
    </div>
  )
}
