import React from "react";
import { graphql } from 'gatsby'
import Layout from "./main.js";
import BlockContent from '@sanity/block-content-to-react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import CategoryListing from "../components/CategoryListing.js";
import Shape from "../components/Shape";
import { Helmet } from "react-helmet";
import ResumeLink from "../components/ResumeLink";

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
            outputPixelDensities: 2
            placeholder: DOMINANT_COLOR
            width: 1440
          )
        }
      }
    }
    gallery {
      _type
      asset {
				_id
        gatsbyImageData(
          outputPixelDensities: 2
          placeholder: DOMINANT_COLOR
          width: 920
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
        id
        order
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
        order
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
	let categories = data.data.allSanityCategory.edges;
  categories.sort((a, b) => a.node.order - b.node.order);
	const posts = data.data.allSanityPost.edges;
  posts.sort((a, b) => a.node.order - b.node.order);
	return (
		<Layout>
      <Helmet>
				<meta charSet="utf-8" />
				<title>{data.data.sanityPost.title} | Brian Norris | Web Developer</title>
			</Helmet>
			<div className="main-wrapper">
				<nav>
        <a href="/" style={{ margin: '0.5em 0 0 0' }}>
					<Shape color="AEBBAE"></Shape>
				</a>
					<ul>
						{categories.map(({ node }) => (
							<li key={node.id}>
								<h3>{node.title}</h3>
								<CategoryListing category={node.id} posts={posts} />
							</li>
						))}
            <ResumeLink />
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
                <GatsbyImage image={image} alt={imageAlt} className={(image.width > image.height ? 'landscape' : 'portrait')} />
              </div>
							: null
					}
					{
						(galleryImages) ? (
							<ul className="post__image-gallery">
								{galleryImages.map(image => 
									<li key={image.asset._id}>
										<GatsbyImage image={getImage(image.asset)} alt="" />
									</li>
								)}
							</ul>)
							: null
					}
					{
						(data.data.sanityPost.github) ?
							<p>
								<a href={data.data.sanityPost.github} target="_blank" rel="noreferrer">GitHub</a>
							</p>
							: null
					}
					{
						(data.data.sanityPost.website) ?
							<p>
								<a href={data.data.sanityPost.website} target="_blank" rel="noreferrer">Website</a>
							</p>
							: null
					}
				</article>
			</div>
		</Layout>
	)
}

export default ProjectPage
