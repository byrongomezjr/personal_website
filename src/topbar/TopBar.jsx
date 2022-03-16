import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">

    <div className="topLeft">
    <i className="topIcons fa-brands fa-github"></i>
    <i className="topIcons fa-brands fa-twitter"></i>
    <i className="topIcons fa-brands fa-instagram"></i>
    </div>

    <div className="topCenter">

    <ul className="topList">
    <li className="topListItem">Home</li>
    <li className="topListItem">About</li>
    <li className="topListItem">Contact</li>
    <li className="topListItem">Log Out</li>
    </ul>

    </div>

    <div className="topRight">
    <img style={{width:50, height: 50, borderRadius: 50/2}} 
    src="https://avatars.githubusercontent.com/u/60487113?v=4" alt="" />
    <i className="topSearchIcon fa-solid fa-user-check"></i>
    </div>

    </div>
  )
}
