
const path = require(`path`)
const fs = require(`fs-extra`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = () => {
  
  /**
   * I18n support - Copies locale files for statis translations into /public folder
   */
  const translationIn = path.join(__dirname, `/src/locales`)
  const transationOut = path.join(__dirname, `/public/locales`)

  fs.ensureDir(transationOut, err => {
    if (err) return console.error(err)
    // dir has now been created, including the directory it is to be placed in
  })

  fs.emptyDir(transationOut, err => {
    // Clean dir to remove old trans files
    if (err) return console.error(err)

    fs.copy(translationIn, transationOut, (err) => {
        // Copy files to public folder
        if (err) console.error(err)
      }
    )
  })

}


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
      console.log(node.frontmatter.slug)
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