import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'


const Wrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 50% 50%;
`

const Title = styled.h2`
	font-weight: 500;
	font-size: 3rem;
`

const Role = styled.h3`
	font-weight: 400;
	font-size: 1.5rem;
`

const Description = styled.p`
	font-weight: 500;
	font-size: 1.5rem;
`


const ProjectShowcase = ({title, role, description, image}) => {
	return (
		<Wrapper>
			<div>
				<Title>{title}</Title>
				<Role>{role}</Role>
				<Description>{description}</Description>
			</div>
			<div>
				<GatsbyImage image={getImage(image)} alt={title} />
			</div>
		</Wrapper>
	)
}

export default ProjectShowcase