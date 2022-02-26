exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
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
    }
  `)
  data.allSanityPost.edges.forEach(edge => {
    const slug = edge.node.slug.current
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/project.js`),
      context: { slug: slug },
    })
  })
}