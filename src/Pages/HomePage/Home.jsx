import React from 'react'
import HeroSection from './HeroSection'
import FieldStripSection from './FieldStripSection'
import LatestProjects from './LatestProjects'
import Testimonials from './Testimonials';
import About from './About';
import DesignProcess from './DesignProcess';
import Services from './Services';

function Home() {
  return (
    <>
    <HeroSection/>
    <FieldStripSection/>
    <About/>
    <Services/>
    <DesignProcess/>
    <LatestProjects/>
    <Testimonials/>
      
    </>
  )
}

export default Home
