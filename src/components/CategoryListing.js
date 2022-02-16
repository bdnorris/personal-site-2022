import * as React from "react"
import { Link } from "gatsby"

// markup
const CategoryListing = props => {
  // const { data, errors } = props;
  // const project = data && data.posts;
  // console.error(errors);
  // console.log(project);
	const postsInCat = props.posts.filter(post => post.node.categories.map(cat => cat.id).includes(props.category));
  return (
		<ul>
			{postsInCat.map(({ node }) => (
				<li key={node.id}>
					<Link to={`/projects/${node.slug.current}`}>{node.title}</Link>
				</li>
			))}
		</ul>
  );
};

export default CategoryListing
