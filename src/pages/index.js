import * as React from "react"
import { graphql } from "gatsby"

// data
export const query = graphql`
query allPosts {
  allSanityPost {
    edges {
      node {
        id
        slug {
          current
        }
        title,
        publishedAt,
      }
    }
  }
}
`;

// markup
const IndexPage = props => {
  // const { data, errors } = props;
  const { data } = props;
  // const project = data && data.posts;
  // console.error(errors);
  // console.log(project);
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Brian Norris
      </h1>
      <h2>
        Web Developer
      </h2>
      <ul>
      {data.allSanityPost.edges.map(({ node }) => (
        <li key={node.id}>
          <h1>{node.title}</h1>
          <p>{node.publishedAt}</p>
          <p>{node.slug.current}</p>
        </li>
      ))}
      </ul>
    </main>
  );
};

export default IndexPage
