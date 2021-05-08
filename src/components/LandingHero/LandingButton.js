import React from 'react'
import styled from 'styled-components'
import { BiPaperPlane } from 'react-icons/bi'


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

const ButtonText = styled.span`
	line-height: 66px;
	position: absolute;
	left: 1.4em;
	transition: left 0.2s;
	user-select: none;
`

const ButtonIcon = styled.span`
	opacity: 0;
	transition: opacity 0.2s, right 0.2s;
	position: absolute;
	right: 1.4em;
	line-height: 66px;
`


const LandingButton = () => {
	return (
		<Button>
			<ButtonText id='mail-text'>Get In Touch</ButtonText>
			<ButtonIcon id='mail-icon'>
				<BiPaperPlane />
			</ButtonIcon>
		</Button>
	)
}

export default LandingButton