import React from 'react'
import { graphql, Link } from 'gatsby'
import { css } from 'theme-ui'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'

import { headerHeight, maxWidth, mediaQueries } from '../utils/tokens'

const StoreTemplate = ({ data }) => {
  const {
    metaDescription,
    metaTitle,
    title,
  } = data.contentfulPage

  const products = data.allContentfulProduct.edges
  
  return (
    <>
      <SEO
        description={metaDescription && metaDescription.internal.content}
        title={metaTitle || title}
      />
      <Layout>
        <div
          css={css({
            pt: headerHeight,
            backgroundColor: `grey.light`,
            maxWidth: maxWidth.xxxl,
            margin: `auto`,
          })}
        >
          <div
            css={css({
              maxWidth: maxWidth.xxl,
              margin: `auto`,
              height: `calc(100vh - ${headerHeight})`,
              px: [0, 0, 4, 6],
              display: `flex`,
              flexDirection: `column`,
            })}
          >
            <h1>Shop</h1>
            <section
              css={css({
                display: `grid`,
                gridTemplateColumns: `1fr 1fr`,
                flex: 1,
                [mediaQueries.lg]: {
                  gridTemplateColumns: `repeat(${products.length},1fr)`,
                  gridAutoRows: `100%`,
                },
              })}
            >
              {products &&
                products.map(({ node }) => {
                  return (
                    <div key={node.id}>
                      <Link to={node.fields.path}>
                        <div
                          css={css({
                            position: `relative`,
                            height: `100%`,
                          })}
                        >
                          {node.mainPhoto && (
                            <Img
                              fluid={node.mainPhoto.fluid}
                              alt={node.mainPhoto.title}
                              css={css({
                                position: `absolute !important`,
                                width: `100%`,
                                height: `100%`,
                              })}
                            />
                          )}
                        </div>
                      </Link>
                    </div>
                  )
                })}
            </section>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default StoreTemplate

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "store" })  {
      ...ContentfulPage_withSections
    }
    allContentfulProduct {
      edges {
        node {
          id
          price
          name
          mainPhoto {
            title
            fluid(maxWidth: 1200 maxHeight: 1200) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          fields {
            path
          }
        }
      }
    }
  }
`