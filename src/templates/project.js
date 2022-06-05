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
		github
		website
    mainImage {
      alt
      mainImageImage {
        asset {
          gatsbyImageData(
            backgroundColor: ""
            breakpoints: 6
            fit: CLIP
            formats: NO_CHANGE
            outputPixelDensities: 2
            placeholder: DOMINANT_COLOR
            sizes: ""
            width: 1844
          )
        }
      }
    }
    gallery {
      _type
      asset {
				_id
        gatsbyImageData(
          backgroundColor: ""
          breakpoints: 6
          width: 900
          sizes: ""
          placeholder: DOMINANT_COLOR
          fit: CROP
          aspectRatio: 1
          outputPixelDensities: 1.5
          layout: FULL_WIDTH
          formats: AUTO
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
			<div className="main-wrapper">
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
            (data.data.sanityPost._rawBody) ?
              <div className="content">
                <BlockContent blocks={data.data.sanityPost._rawBody} serializers={{ types: { block: BlockRenderer } }} />
              </div>
              : null
          }
					{
						(image) ?
              <div className="post__main-image">
                <GatsbyImage image={image} alt={imageAlt} />
              </div>
							: null
					}
					{
						(galleryImages) ? (
							<ul className="post__image-gallery">
								{galleryImages.map(image => 
									<li key={image.asset._id}>
										<GatsbyImage image={getImage(image.asset)} alt="TODO" />
									</li>
								)}
							</ul>)
							: null
					}
					{
						(data.data.sanityPost.github) ?
							<p>
								<a href={data.data.sanityPost.github}>GitHub</a>
							</p>
							: null
					}
					{
						(data.data.sanityPost.website) ?
							<p>
								<a href={data.data.sanityPost.website}>Website</a>
							</p>
							: null
					}
				</article>
			</div>
		</Layout>
	)
}

export default ProjectPage