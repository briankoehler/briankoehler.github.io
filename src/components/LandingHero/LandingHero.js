import React from 'react'
import styled from 'styled-components'
import { BiPaperPlane } from 'react-icons/bi'


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

const Button = styled.a`
    font-family: 'Quicksand';
    text-decoration: none;
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
    background-color: #FF5C5C;

    display: block;
    /* align-items: center;
    justify-content: center; */
    width: 210px;
    height: 66px;

    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    margin-top: 3em;
    transition: background-color 0.2s;
    position: relative;

    #mail-text {
        line-height: 66px;
        position: absolute;
        left: 1.4em;
        transition: left 0.2s;
        user-select: none;
    }

    #mail-icon {
        opacity: 0;
        transition: opacity 0.2s, right 0.2s;
        position: absolute;
        right: 1.4em;
        line-height: 66px;
    }

    :hover {
        cursor: pointer;
        background-color: #EF4C4C;

        #mail-text {
            left: 0.75em;
        }

        #mail-icon {
            right: 0.75em;
            opacity: 1;
        }
    }

    :active {
        transform: translateY(2%);
    }
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
            <Button>
                <span id='mail-text'>Get In Touch</span>
                <span id='mail-icon'><BiPaperPlane /></span>
            </Button>
        </Wrapper>
    )
}

export default LandingHero