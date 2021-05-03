import React from 'react'
import styled from 'styled-components'
import './index.css'
import HeroBackground from '../components/HeroBackground'
import Navbar from '../components/Navbar/Navbar'


const IndexPage = () => {
    return (
        <>
            <HeroBackground width="100vw" height="105vh" />
            <Navbar />
        </>
    )
}


export default IndexPage
