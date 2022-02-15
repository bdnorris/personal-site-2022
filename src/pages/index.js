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
          _id
        }
      }
    }
  }
  allSanityCategory {
    edges {
      node {
        title
        _id
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
        {data.allSanityCategory.edges.map(({ node }) => (
          <li key={node.id}>
            <h3>{node.title}</h3>
            {node._id}
            {data.allSanityPost.edges.map(({ node }) => (
              (node.categories.map(({ _id }) => _id === node._id)) ? (
                <CategoryListing></CategoryListing>
              ) : ''
            ))}
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage
