import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'


const ExperiencePage = () => {

	const data = useStaticQuery(graphql`
		query {
			allMdx {
				nodes {
					frontmatter {
						description
						role
						title
					}
				}
			}
		}`)

	const frontmatters = data['allMdx']['nodes'].map(node => node['frontmatter'])
	console.log(frontmatters)

	return (
		frontmatters.map((obj) => {
			return (
				<h1>{obj['title']}</h1>
			)
		})
	)
}

export default ExperiencePage
