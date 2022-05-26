import * as React from "react"
import { graphql } from "gatsby"
import '../../sass/index.scss';
import Layout from "../../templates/main";
// import { Helmet } from "react-helmet";

// data
export const query = graphql`
query MyQuery($slug: String) {
  sanityPost(slug: {current: {eq: $slug}}) {
    id
    mainImage {
      _key
      _type
      _rawAsset
      _rawHotspot
      _rawCrop
    }
    title
    body {
      children {
        _key
        _type
        marks
        text
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
  const post = data.sanityPost.edges;
  return (
    <Layout>
      <title>{ post.title }</title>
      <h1 style={{margin: '1em 0 0 0'}}>
        PROJECT NAME
      </h1>
      <h2 style={{margin: '0'}}>
        Web Developer
      </h2>
    </Layout>
  );
};

export default IndexPage
