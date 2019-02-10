const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  // const defaultPage = path.resolve(`src/templates/default-page.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        slug: node.frontmatter.slug,
        path: `/pages/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/default-page.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.frontmatter.slug,
          context: {}, // additional data can be passed via context
        },
      })
    })
  })
}