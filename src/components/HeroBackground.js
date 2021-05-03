import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -10;
`


const HeroBackground = (props) => {
    return (
        <Wrapper>
            <svg width={props.width} height={props.height} viewBox="0 0 1440 932" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 601.696V0H1440V601.696C1358.41 718.234 1250.8 1068.35 1059.6 874.785C957.11 771.025 697.557 741.282 458.659 713.907L457.977 713.829C251.477 690.166 60.5412 668.221 0 601.696Z" fill="#343359"/>
            </svg>
        </Wrapper>
    )
}

export default HeroBackground
