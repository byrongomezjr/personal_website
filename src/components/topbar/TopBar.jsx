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
    <li className="topListItem">HOME</li>
    <li className="topListItem">BLOG</li>
    <li className="topListItem">CODING</li>
    </ul>

    </div>

    <div className="topRight">
    <i className="darkModeIcon fa-solid fa-moon"></i>
    </div>

    </div>
  )
}
