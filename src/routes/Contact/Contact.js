import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroImage2 from '../../components/Hero2/HeroImage2'
import Form from '../../components/Form/Form'

const Contact = () => {
  return (
    <div>
     <Navbar/>
     <HeroImage2 heading = "CONTACT" text="Let's have a coffee chat"/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default Contact
