import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    border: 1px solid #F9F9F9;
    border-radius: 6px;
    width: fit-content;
`

const Text = styled.a`
    font-weight: 500;
    font-size: 3.725rem;
    color: #F9F9F9;
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