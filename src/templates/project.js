import React from "react";
import { graphql } from 'gatsby'
import Layout from "./main.js";
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"


const BlockRenderer = (props) => {
	const { style = 'normal' } = props.node

	if (/^h\d/.test(style)) {
		const level = style.replace(/[^\d]/g, '')
		return React.createElement(style, { className: `heading-${level}` }, props.children)
	}

	if (style === 'blockquote') {
		return <blockquote>- {props.children}</blockquote>
	}

	// Fall back to default handling
	return BlockContent.defaultSerializers.types.block(props)
}

export const query = graphql`
query MyQuery($slug: String!) {
	sanityPost(slug: {current: {eq: $slug}}) {
		_createdAt(locale: "", fromNow: false, formatString: "", difference: "")
		title
		_rawBody
		body {
			children {
				marks
				text
				_type
			}
		}
		mainImage {
			asset {
				gatsbyImageData(
					aspectRatio: 1.5
					backgroundColor: ""
					breakpoints: 3
					fit: CLIP
					formats: NO_CHANGE
					layout: FIXED
					outputPixelDensities: 1.5
					placeholder: DOMINANT_COLOR
					sizes: "(max-width: 768px) 480px, 800px"
					height: 360
					width: 480
				)
				description
				path
			}
		}
	}
}
`;

const ProjectPage = (data) => {
	console.log(data);
	const image = getImage(data.data.sanityPost.mainImage.asset)
	return (
		<Layout>
			<h1>{data.data.sanityPost.title}</h1>
			<article>
				{
					(data.data.sanityPost.mainImage) ?
						<GatsbyImage image={image} alt={image.alt} />
						: null
				}
				{
					(data.data.sanityPost._rawBody) ?
						<BlockContent blocks={data.data.sanityPost._rawBody} serializers={{ types: { block: BlockRenderer } }} />
						: null
				}
			</article>
		</Layout>
	)
}

export default ProjectPage