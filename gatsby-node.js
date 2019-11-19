/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if(node.internal.type === `ContentfulProject`) {
    const url = `/projects/${node.slug}/`

    createNodeField({
      node,
      name: `path`,
      value: url,
    })
  }

  if(node.internal.type === `ContentfulPage`) {
    const url = `/${node.slug}/`

    createNodeField({
      node,
      name: `path`,
      value: url,
    })
  }

  if(node.internal.type === `ContentfulProduct`) {
    const url = `/products/${node.slug}/`

    createNodeField({
      node,
      name: `path`,
      value: url,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadProjects = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProject {
          edges {
            node {
              slug
              fields {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      const projects = result.data.allContentfulProject.edges

      projects.map(({ node }) => {
        // use `/` for home page and use the generated fields.path for other pages
        const pageUrl = node.slug === `home` ? `/` : node.fields.path

        createPage({
          path: pageUrl,
          component: path.resolve(
            `./src/templates/project-template.js`
          ),
          context: {
            slug: node.slug,
          },
        })
      })

      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
              fields {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges

      pages.map(({ node }) => {
        const url = node.slug === `home` ? `/` : node.fields.path
        createPage({
          path: url,
          component: path.resolve(`./src/templates/page-template.js`),
          context: {
            slug: node.slug,
          }
        })
      })
      resolve()
    })
  })

  const loadProducts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulProduct {
          edges {
            node {
              slug
              fields {
                path
              }
            }
          }
        }
      }
    `).then(result => {
      const products = result.data.allContentfulProduct.edges

      products.map(({ node }) => {
        createPage({
          path: node.fields.path,
          component: path.resolve(`./src/templates/product-template.js`),
          context: {
            slug: node.slug 
          }
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPages, loadProjects])
}