import * as React from "react"
import '../sass/index.scss';
import { graphql } from "gatsby"
import Layout from "../templates/main";
import CategoryListing from "../components/CategoryListing";
import Shape from "../components/Shape";
import { Helmet } from "react-helmet";
import NetworkIcons from "../components/NetworkIcons.js";
import { Link } from "gatsby"

// data
export const query = graphql`
query posts {
	allSanityPost {
		edges {
			node {
				title
				slug {
					current
				}
				_updatedAt
				categories {
					title
					id
				}
			}
		}
	}
	allSanityCategory {
		edges {
			node {
				title
				id
			}
		}
	}
}
`;

// markup
const IndexPage = ({ data }) => {
	console.log(data);
	const categories = data.allSanityCategory.edges;
	const posts = data.allSanityPost.edges;
	const socialLinks = [
		{
			name: 'Dribbble',
			url: 'https://dribbble.com/bdnorris',
			icon: 'dribbble',
		},
		{
			name: 'Github',
			url: 'https://github.com/bdnorris',
			icon: 'github',
		},
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/brian-norris-b401ab37/',
			icon: 'linkedin',
		},
		{
			name: 'CodePen',
			url: 'https://codepen.io/bdnorris',
			icon: 'codepen',
		},
	]
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Brian Norris | Web Developer</title>
			</Helmet>
			<div className="main-wrapper main-wrapper--full">
				<div>
				<h1 style={{ margin: '1em 0 0 0' }}>
					Brian N<Shape></Shape>rris
				</h1>
				<h2 style={{ margin: '0' }}>
					Web Developer
				</h2>
				<nav>
					<ul>
						{categories.map(({ node }) => (
							<li key={node.id}>
								<h3>{node.title}</h3>
								<CategoryListing category={node.id} posts={posts} />
							</li>
						))}
						<li>
							<h3>Meta</h3>
							<ul>
								<li>
									<Link to="/resume">Résumé</Link>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<div className="social-links">
					<ul>
						{socialLinks.map(({ name, url, icon }) => (
							<li key={name}>
								<a href={url} target="_blank" rel="noreferrer">
									<NetworkIcons icon={icon} />
								</a>
							</li>
						))}
					</ul>
				</div>
				</div>
			</div>
		</Layout>
	);
};

export default IndexPage
