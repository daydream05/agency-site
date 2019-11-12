import React from 'react'
import { graphql } from 'gatsby'
import { css } from 'theme-ui'
import Img from 'gatsby-image'

import SEO from '../components/seo'
import Layout from '../components/layout'

import { headerHeight, maxWidth, mediaQueries, space } from '../utils/tokens'

const StoreTemplate = ({ data }) => {
  console.log(data)
  const {
    metaDescription,
    metaTitle,
    title
  } = data.contentfulPage

  const products = data.allContentfulProduct.edges
  
  console.log(products)
  
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
          })}
        >
          <div
            css={css({
              maxWidth: maxWidth.xxl,
              margin: `auto`,
              px: [4, 4, 6],
            })}
          >
            <h1>Store</h1>
            <section
              css={css({
                display: `grid`,
                gridGap: 5,
                [mediaQueries.lg]: {
                  gridTemplateColumns: `repeat(3, 1fr)`,
                  maxWidth: maxWidth.lg,
                  px: 5,
                  py: 5,
                  gridGap: 5,
                  margin: `auto`,
                },
              })}
            >
              {products && products.map(({ node }) => {
                return (
                  <div key={node.id}>
                    {node.mainPhoto && (
                      <div
                        css={css({
                          pb: 3,
                        })}
                      >
                        <Img
                          fluid={node.mainPhoto.fluid}
                          alt={node.mainPhoto.title}
                        />
                      </div>
                    )}
                    <div
                      css={css({
                        display: `grid`,
                        gridTemplateColumns: `1fr auto`,
                        gridGap: `${space[3]}px`,
                      })}
                    >
                      <h5
                        css={css({
                          fontSize: 2,
                          mb: 0,
                        })}
                      >
                        {node.name}
                      </h5>
                      <span
                        css={css({
                          fontWeight: `bold`,
                          fontSize: 1,
                        })}
                      >${node.price}</span>
                    </div>
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
        }
      }
    }
  }
`