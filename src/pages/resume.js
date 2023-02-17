import * as React from "react"
import '../sass/index.scss';
import { Helmet } from "react-helmet";
import Layout from "../templates/main";
import { graphql } from "gatsby"

export const query = graphql`
query MyQuery {
  markdownRemark(frontmatter: {slug: {eq: "resume"}}) {
    frontmatter {
      slug
      title
      date
    }
    html
  }
}
`

const Resume = ({ data }) => {
	const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Résumé | Brian Norris | Web Developer</title>
			</Helmet>
			<div className="main-wrapper main-wrapper--full">
				<h1>{frontmatter.title}</h1>
				<p>Last Updated {frontmatter.date}</p>
				<div
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</Layout>
	)
}

export default Resume