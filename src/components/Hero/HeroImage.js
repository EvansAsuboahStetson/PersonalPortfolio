import  "./HeroImage.css"
import React from 'react'
import EvansImage from "../../assets/evansIT.JPG"
import { Link } from "react-router-dom"

const HeroImage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={EvansImage}/>
      </div>
      <div className="content">
        <p>HI, I AM A SOFWARE ENGINEER</p>
        <h1>
          Evans Asuboah 
        </h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  )
}

export default HeroImage
