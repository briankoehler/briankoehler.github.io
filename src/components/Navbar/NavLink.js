import React, { useState } from 'react'
import styled from 'styled-components'


const Underline = styled.div`
    background: orangered;
    border-radius: 10px;
    height: 8px;
    width: ${props => props.width};
    opacity: ${props => props.opacity};
    transition: width 0.25s, opacity 0.5s;
    margin-top: 4px;
`


const NavLink = (props) => {

    const [width, setWidth] = useState('0%')
    const [opacity, setOpacity] = useState('0')

    return (
        <div>
            <a id={props.id} href={props.href} onMouseOver={() => {setWidth(props.underLength || '50%'); setOpacity('1')}} onMouseOut={() => {setWidth('0%'); setOpacity('0')}}>{props.value}</a>
            <Underline width={width} opacity={opacity} />
        </div>
    )
}

export default NavLink
