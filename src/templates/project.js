import React from "react";
import { graphql } from 'gatsby'
import Layout from "./main.js";
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CategoryListing from "../components/CategoryListing.js";

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
query sanityPost($slug: String!) {
  sanityPost(slug: {current: {eq: $slug}}) {
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
      alt
      mainImageImage {
        asset {
          gatsbyImageData(
            aspectRatio: 1.5
            backgroundColor: ""
            breakpoints: 10
            fit: CLIP
            formats: NO_CHANGE
            height: 100
            layout: FIXED
            outputPixelDensities: 1.5
            placeholder: DOMINANT_COLOR
            sizes: ""
            width: 100
          )
        }
      }
    }
    gallery {
      _type
      asset {
				_id
        gatsbyImageData(
          aspectRatio: 1
          backgroundColor: ""
          breakpoints: 10
          fit: CLIP
          layout: FIXED
          width: 109
          sizes: ""
          placeholder: DOMINANT_COLOR
          outputPixelDensities: 1.5
          height: 109
          formats: NO_CHANGE
        )
      }
    }
    categories {
      id
    }
    internal {
      content
      description
      ignoreType
      mediaType
    }
  }
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

const ProjectPage = (data) => {
	console.log(data);
	const image = data.data.sanityPost.mainImage ? getImage(data.data.sanityPost.mainImage.mainImageImage.asset) : null;
	const imageAlt = data.data.sanityPost.mainImage ? data.data.sanityPost.mainImage.alt : null;
	console.log('image', image);
	const galleryImages = data.data.sanityPost.gallery;
	console.log('galleryImages', galleryImages);
	const categories = data.data.allSanityCategory.edges;
	const posts = data.data.allSanityPost.edges;
	return (
		<Layout>
			<div className="columns">
				<nav>
					<ul>
						{categories.map(({ node }) => (
							<li key={node.id}>
								<h3>{node.title}</h3>
								<CategoryListing category={node.id} posts={posts} />
							</li>
						))}
					</ul>
				</nav>
				<article>
					<h1>{data.data.sanityPost.title}</h1>
					{
						(image) ?
							<GatsbyImage image={image} alt={imageAlt} />
							: null
					}
					{
						(galleryImages) ? (
							<ul>
								{galleryImages.map(image => 
									<li key={image.asset._id}>
										<GatsbyImage image={getImage(image.asset)} alt="TODO" />
									</li>
								)}
							</ul>)
							: null
					}
					{
						(data.data.sanityPost._rawBody) ?
							<BlockContent blocks={data.data.sanityPost._rawBody} serializers={{ types: { block: BlockRenderer } }} />
							: null
					}
				</article>
			</div>
		</Layout>
	)
}

export default ProjectPage