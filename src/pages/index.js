import * as React from "react"
import { graphql } from "gatsby"
import '../sass/index.scss';
import Layout from "../templates/main";
import CategoryListing from "../components/CategoryListing";

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
const IndexPage = ({data}) => {
  // const { data, errors } = props;
  // const { data } = props;
  // const project = data && data.posts;
  // console.error(errors);
  console.log(data);
  const categories = data.allSanityCategory.edges;
  const posts = data.allSanityPost.edges;
  return (
    <Layout>
      <title>Home Page</title>
      <h1>
        Brian Norris
      </h1>
      <h2>
        Web Developer
      </h2>
      <ul>
        {categories.map(({ node }) => (
          <li key={node.id}>
            <h3>{node.title}</h3>
            <CategoryListing category={node.id} posts={posts} />
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage
