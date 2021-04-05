import React from 'react'
import styled from 'styled-components'
import NavLink from './NavLink'


const NavContainer = styled.nav`
    /* Position */
    /* position: sticky;
    top: 32px; */
    position: fixed;

    /* Display */
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    /* Dimensions */
    height: 64px;
    width: calc(100% - 250px);

    /* Margins */
    margin-left: 125px;
    margin-right: 125px;
    margin-top: 64px;

    a {
        color: black;
        text-decoration: none;
        font-family: 'Rubik';
        font-size: 1.75rem;
        font-weight: 400;
    }

    #logo {
        font-size: 2.5rem;
        font-weight: 700;
    }
`

const Links = styled.div`
    display: flex;
    flex-direction: row;

    div + div {
        margin-left: 36px;
    }
`


const Navbar = () => {
    return (
        <>
            <NavContainer>
                <NavLink id='logo' href='/' value='Brian Koehler' underLength='20%' />
                <Links>
                    <NavLink href='/projects' value='Projects' />
                    <NavLink href='/about' value='About' />
                    <NavLink href='/blog' value='Blog' />
                </Links>
            </NavContainer>
        </>
    )
}

export default Navbar
