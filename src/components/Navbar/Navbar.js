import "./Navbar.css";
import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [bgColor, setBgColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setBgColor(true);
        }
        else {
            setBgColor(false);
        }
    };
    window.addEventListener('scroll', changeColor);

  return (
    <div>
        
        <div className= {bgColor ? "header header-bg": "header"}>
            <Link to="/">
            <h1>Portfolio</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Experiences</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="burger" onClick={handleClick}>
                {click ? <FaTimes size={20} style={{color:"#fff"}}/> : <FaBars size={20} style={{color:"#fff"}}/>}
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
