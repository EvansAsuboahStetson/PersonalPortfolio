import Footer from "../../components/Footer/Footer";
import GalleryData from "../../components/GalleryData/GalleryData";
import GalleryMap from "../../components/GalleryMap/GalleryMap";
import HeroImage2 from "../../components/Hero2/HeroImage2";
import Navbar from "../../components/Navbar/Navbar";
import "./Gallery.css";

import React from 'react'

const Gallery = () => {
  return (
    <div>
      <Navbar/>
     <HeroImage2 heading = "GALLERY" text="SOME EXCITING PHOTOS AND VIDEOS"/>
     <GalleryMap photos={GalleryData}/>
     <Footer/>
    </div>
  )
}

export default Gallery
