import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    border: 2px solid white;
    border-radius: 6px;
    width: fit-content;
`

const Text = styled.a`
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    font-size: 3.725rem;
    color: white;
    text-decoration: none;
`


const Logo = () => {
    return (
        <Wrapper>
            <Text href='/'>BK</Text>
        </Wrapper>
    )
}

export default Logo