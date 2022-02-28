import React from "react";
import { graphql } from 'gatsby'
import Layout from "./main.js";

export const query = graphql`
query MyQuery($slug: String!) {
	sanityPost(slug: {current: {eq: $slug}}) {
		_createdAt(locale: "", fromNow: false, formatString: "", difference: "")
		title
		body {
			children {
				marks
				text
				_type
			}
		}
	}
}
`;

const ProjectPage = (data) => {
	console.log(data);
	return (
		<Layout>
			<h1>{data.data.sanityPost.title}</h1>
			<article>
				{
					(data.data.sanityPost.body) ?
						data.data.sanityPost.body[0].children.map((child) => {
							return (
								<p key={child.text}>
									{child.text}
								</p>
							)
						}) : null
				}
			</article>
		</Layout>
	)
}

export default ProjectPage