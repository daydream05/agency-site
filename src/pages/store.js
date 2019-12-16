import React, { useEffect, useRef } from 'react'
import { graphql, navigate } from 'gatsby'
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

  const imagesRef = useRef([])

  useEffect(() => {
    imagesRef.current = imagesRef.current.slice(0, products.length)
  }, [products])

  const onClick = (index, path) => {
    const {
      width, height, top, left
    } = imagesRef.current[index].getBoundingClientRect()

    const startingStyle = {
      width, height, top, left
    }
    navigate(path, {
      state: {
        startingStyle,
        animate: true,
      },
    })
  }
  
  return (
    <>
      <SEO
        description={metaDescription && metaDescription.internal.content}
        title={metaTitle || title}
      />
      <Layout darkMobileMenu>
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
                overflow: `hidden`,
                [mediaQueries.lg]: {
                  gridTemplateColumns: `repeat(${products.length},1fr)`,
                  gridAutoRows: `100%`,
                },
              })}
            >
              {products &&
                products.map(({ node }, index) => {
                  return (
                    <div
                      key={node.id}
                    >
                      <div
                        onClick={() => onClick(index, node.fields.path)}
                        role="link"
                        tabIndex="0"
                        css={css({
                          height: `100%`,
                          cursor: `pointer`,
                        })}
                      >
                        <div
                          css={css({
                            position: `relative`,
                            height: `100%`,
                            width: `100%`,
                          })}
                          ref={el => imagesRef.current[index] = el}
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
          fields {
            path
          }
        }
      }
    }
  }
`