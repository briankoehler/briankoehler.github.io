import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'


const Wrapper = styled.div`
    width: 100%;
    margin-top: 2.188em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const OptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: min-content min-content min-content min-content;
    grid-column-gap: 2.8125em;
    align-items: center;
`

const Option = styled.a`
    font-weight: 400;
    font-size: 1.5rem;
    color: #F9F9F9;
    text-decoration: none;
`


const Navbar = () => {
    return (
        <Wrapper>
            <Logo />
            <OptionsWrapper>
                <Option href='/experience'>Experience</Option>
                <Option href='/about'>About</Option>
                <Option href='/contact'>Contact</Option>
                <Option href='/blog'>Blog</Option>
            </OptionsWrapper>
        </Wrapper>
    )
}

export default Navbar