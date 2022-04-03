import "./topbar.css"
import { Link } from "react-router-dom";

import DarkMode from '../darkmode/DarkMode';


export default function TopBar () {

  return (
    <>
    
    <div className="top">

    <div className="bar">

    <div className="topLeft">
    <i className="darkModeIcon fa-brands fa-github"></i>
    <a className="topIcons" href="https://www.github.com/byrongomezjr">
    </a>

    <i className="darkModeIcon fa-brands fa-twitter"></i>
    <a className="topIcons" href="https://www.twitter.com/byrongomezjr">
    </a>

    <i className="darkModeIcon fa-brands fa-instagram"></i>
    <a className="topIcons" href="https://www.instagram.com/byrongomezjr">
    </a>
    </div>

    <div className="topCenter">

    <li className="topListItem">
    <Link className="button" to="/">
    HOME
    </Link>
    </li>


    <li className="topListItem">
    <Link className="button" to="/coding">
    CODING
    </Link>
    </li>

    <li className="topListItem">
    <Link className="button" to="/books">
    BOOKS
    </Link>
    </li>
    
    <li className="topListItem">
    <Link className="button" to="/blog">
    BLOG
    </Link>
    </li>

    </div>

    <div className="topRight">
    <i className="lightModeIcon fa-solid fa-sun"></i>
    <DarkMode />
    <i className="darkModeIcon fa-solid fa-moon"></i>
    </div>

    </div>

    </div>
    </>
  );
};