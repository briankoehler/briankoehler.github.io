import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import ProjectShowcase from '../components/ProjectShowcase/ProjectShowcase'

const ExperiencePage = () => {

	/* Query for project data (frontmatter) */
	const data = useStaticQuery(graphql`
		query {
			projects: allMdx {
				nodes {
					frontmatter {
						description
						role
						title
						image {
							childImageSharp {
								gatsbyImageData(width: 600, placeholder: BLURRED, formats: PNG)
							}
						}
					}
				}
			}
		}`)

	/* Construct array of frontmatters */
	const frontmatters = data.projects.nodes.map(node => node.frontmatter)

	/* Display a showcase for each project */
	return (
		frontmatters.map((projectData, index) => {
			return (
				<ProjectShowcase key={index} {...projectData} />
			)
		})
	)
}

export default ExperiencePage
