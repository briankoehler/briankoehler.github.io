import React from 'react'
import styled from 'styled-components'
import { BiPaperPlane } from 'react-icons/bi'
import LandingButton from './LandingButton'


const Wrapper = styled.div`
    margin-top: 7.3125em;
    width: 67%;
`

const Greeting = styled.p`
    font-weight: 400;
    font-size: 1.5rem;
    color: #FF5C5C;
`

const Name = styled.h1`
    font-weight: 700;
    font-size: 6rem;
    color: white;
`

const Subtitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
    color: white;
    margin-top: 1em;
`


const LandingHero = () => {
    return (
        <Wrapper>
            <Greeting>
                Hi, my name is
            </Greeting>
            <Name>
                Brian Koehler.
            </Name>
            <Subtitle>
                I’m a software engineer studying at the University of Florida interested in all 
                things design and development. I'm always looking for opportunities to build and 
                learn, so please reach out.
            </Subtitle>
            <LandingButton />
        </Wrapper>
    )
}

export default LandingHero