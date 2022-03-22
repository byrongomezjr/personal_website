import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar () {
  return (
    <div className="top">

    <div className="topLeft">
    <a href="https://www.github.com/byrongomezjr">
    <i className="topIcons fa-brands fa-github"></i>
    </a>

    <a href="https://www.twitter.com/byrongomezjr">
    <i className="topIcons fa-brands fa-twitter"></i>
    </a>

    <a href="https://www.instagram.com/byrongomezjr">
    <i className="topIcons fa-brands fa-instagram"></i>
    </a>
    </div>

    <div className="topCenter">

    <li className="topListItem">
    <Link className="button" to="/">
    HOME
    </Link>
    </li>
    <li className="topListItem">
    <Link className="button" to="/blog">
    BLOG
    </Link>
    </li>
    <li className="topListItem">
    <Link className="button" to="/coding">
    CODING
    </Link>
    </li>

    </div>

    <div className="topRight">
    <i className="darkModeIcon fa-solid fa-moon"></i>
    </div>

    </div>
  );
};