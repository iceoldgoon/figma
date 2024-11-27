import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  
  return (
    <>
    <header>
            <div className="logo">
                <h1>DB-</h1>
            </div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"about"}>About</Link></li>
                <li><Link to={"contact"}>Contact</Link></li>
                <li><Link to={"Gallery"}>Gallery</Link></li>
                <li><Link to={"News"}>News</Link></li>
                <li><Link to={"ProcessDetails"}>ProcessDetails</Link></li>
                <li><Link to={"Career"}>Career</Link></li>
                <li><Link to={"Ourstory"}>Ourstory</Link></li>
                <li><Link to={"Services"}>Services</Link></li>
            </ul>
        </header>
    </>
  )                  
}

export default Header