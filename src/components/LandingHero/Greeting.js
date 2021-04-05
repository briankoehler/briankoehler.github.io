import React from 'react'
import styled from 'styled-components'


const Title = styled.h1`
    font-family: 'Rubik';
    font-weight: bold;
    font-size: 5rem;
    margin: 0 0;
`

const Subtitle = styled.h2`
    font-family: 'Rubik';
    font-size: 1.75rem;
    font-weight: normal;
    margin: 0 0;

    .orange {
        color: orangered;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const WorkButton = styled.button`
    background-color: dodgerblue;
    border: none;
    border-radius: 50px;
    width: 210px;
    height: 75px;
    font-family: 'Rubik';
    font-weight: bold;
    font-size: 24px;
    color: white;
    margin-top: 48px;

    :hover {
        background-color: #44a2ff;
        cursor: pointer;
    }

    :active {
        background-color: dodgerblue;
    }
`


const Greeting = () => {
    return (
        <div>
            <Title>Hey, I'm Brian.</Title>
            <Subtitle>Software engineer currently attending the <strong class='orange'>University of Florida</strong> studying Computer Science</Subtitle>
            <ButtonWrapper>
                <a href='/projects'>
                    <WorkButton>My Work</WorkButton>
                </a>
            </ButtonWrapper>
        </div>
    )
}

export default Greeting
