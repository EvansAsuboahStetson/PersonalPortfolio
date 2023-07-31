import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroImage2 from '../../components/Hero2/HeroImage2'
import ExperiencesData from '../../components/ExperiencesData/ExperiencesData'
import Work from '../../components/Work/Work'

const Experiences = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading = "EXPERIENCES AND ACHIEVEMENTS" text="I am a final year student at Stetson University"/>
      <Work  WorkData = {ExperiencesData} title=" Experiences and Achievements"/>
      <Footer/>
    </div>
  )
}

export default Experiences
