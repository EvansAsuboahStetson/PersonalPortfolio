import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroImage2 from '../../components/Hero2/HeroImage2'
import Work from '../../components/Work/Work'
import WorkData from '../../components/WorkData/WorkData'

const Project = () => {
  return (
    <div>
     <Navbar/>
     <HeroImage2 heading = "PROJECTS" text="Most Recent Projects"/>
     <Work WorkData={WorkData} title="Projects"/>
     <Footer/>
    </div>
  )
}

export default Project
