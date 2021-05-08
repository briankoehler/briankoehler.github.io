import React from 'react'
import './index.css'
import Navbar from '../components/Navbar/Navbar'
import HeroBackground from '../components/HeroBackground'
import LandingHero from '../components/LandingHero/LandingHero'


const IndexPage = () => {
    return (
        <>
            <HeroBackground width="100vw" height="105vh" />
            <Navbar />
            <LandingHero />
        </>
    )
}


export default IndexPage
