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
          _key
          _type
          current
        }
        title
      }
    }
  }
}
`;

// markup
const IndexPage = props => {
  const { data, errors } = props;
  const project = data && data.posts;
  return (
    <main>
      <title>Home Page</title>
      <h1>
        Congratulations
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      {JSON.stringify(data)}
      {data.allSanityPost.edges.map(({ node }) => (
        <div key={node.id}>
          {node.title}
          {/* {node.slug} */}
        </div>
      ))}
    </main>
  );
};

export default IndexPage
