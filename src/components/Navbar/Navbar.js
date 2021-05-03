import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'


const Wrapper = styled.div`
    width: 100%;
    margin-top: 2.188em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .nav-option {
        font-weight: 400;
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
    }
`

const OptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content min-content min-content min-content;
    grid-column-gap: 2.8125em;
    align-items: center;
`


const Navbar = () => {
    return (
        <Wrapper>
            <Logo />
            <OptionsWrapper>
                <a className='nav-option' href='/experience'>Experience</a>
                <a className='nav-option' href='/about'>About</a>
                <a className='nav-option' href='/contact'>Contact</a>
                <a className='nav-option' href='/blog'>Blog</a>
            </OptionsWrapper>
        </Wrapper>
    )
}

export default Navbar