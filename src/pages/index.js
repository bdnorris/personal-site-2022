import * as React from "react"
import { graphql } from "gatsby"
import '../sass/index.scss';
import Layout from "../templates/main";
import CategoryListing from "../components/CategoryListing";
import Shape from "../components/Shape";
// import { Helmet } from "react-helmet";

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
  return (
    <Layout>
      <title>Home Page</title>
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
        </ul>
      </nav>
    </Layout>
  );
};

export default IndexPage
