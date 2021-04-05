import React from 'react'
import styled from 'styled-components'
import Greeting from './Greeting'
import DesignBuildEvolve from './DesignBuildEvolve'


const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


const LandingHero = () => {
    return (
        <Container>
            <Greeting />
            <DesignBuildEvolve />
        </Container>
    )
}

export default LandingHero
