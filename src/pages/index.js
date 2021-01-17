import React, {useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjectOne, homeObjectTwo, homeObjectThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/services';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer'

function Home() {
  const [isopen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isopen)
  }

    return (
        <>
        <Sidebar isopen={isopen} toggle={toggle}/>
        <Navbar toggle={toggle} /> 
        <HeroSection />
        <InfoSection {...homeObjectOne}/>
        <InfoSection {...homeObjectTwo}/>
        <Services />
        <InfoSection {...homeObjectThree} />
        <Footer />
        </>
    )
}

export default Home
