import React from 'react'
import { graphql, Link, navigate } from 'gatsby'
import { css } from 'theme-ui'
import { FaLongArrowAltLeft, FaAngleLeft, FaAngleRight } from "react-icons/fa"

import SEO from '../components/seo'
import ProductLayout from '../components/product-layout'
import Container from '../components/container'

import { mediaQueries, space, breakpoints, headerHeight } from "../utils/tokens"
import ProductPageGallery from '../components/product-page-gallery'
import ProductPageProductInformation from '../components/product-page-product-information'

const ProductTemplate = ({ data }) => {
  const {
     name,
     price,
     productMedias,
     mainPhoto,
     longDescription,
     id,
     fields
  } = data.contentfulProduct

  const productIndex = data.allContentfulProduct.edges.find(
    ({ node: product }) => product.id === id
  )

  return (
    <>
      <SEO />
      <ProductLayout>
        <section
          css={css({
            py: [headerHeight, headerHeight, headerHeight, headerHeight, 0],
            [mediaQueries.xxxl]: {
              height: `100vh`,
            },
          })}
        >
          <Container
            css={css({
              px: [0],
              maxWidth: breakpoints.xxxl,
              [mediaQueries.xxxl]: {
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                height: `100%`,
              },
            })}
          >
            <div
              css={css({
                [mediaQueries.lg]: {
                  display: `grid`,
                  gridTemplateColumns: `7fr 5fr`,
                },
              })}
            >
              <aside
                css={css({
                  mb: 5,
                  position: `relative`,
                  [mediaQueries.lg]: {
                    mb: 0,
                  },
                })}
              >
                <ProductPageGallery
                  images={productMedias}
                  mainPhoto={mainPhoto}
                />
              </aside>
              <aside
                css={css({
                  position: `relative`,
                  [mediaQueries.lg]: {
                    mt: headerHeight,
                  },
                })}
              >
                <div
                  css={css({
                    display: `flex`,
                    flexDirection: `column-reverse`,
                    px: 4,
                    [mediaQueries.lg]: {
                      padding: `0 ${space[4]}px`,
                      flexDirection: `column`,
                      height: `100%`,
                    },
                  })}
                >
                  <div
                    css={css({
                      display: `flex`,
                      justifyContent: `space-between`,
                      mt: [5, 5, 5, 5, 0],
                      mb: [0, 0, 0, 0, 5],
                    })}
                  >
                    <Link
                      to="/store/"
                      css={css({
                        display: `flex`,
                        alignItems: `center`,
                      })}
                    >
                      <FaLongArrowAltLeft />
                      <span
                        css={css({
                          ml: 2,
                        })}
                      >
                        Back to product list
                      </span>
                    </Link>
                    <div
                      css={css({
                        display: `flex`,
                        justifyContent: productIndex.previous
                          ? `space-between`
                          : `flex-end`,
                      })}
                    >
                      <button
                        onClick={() => {
                          productIndex.previous &&
                            navigate(productIndex.previous.fields.path)
                        }}
                        disabled={!productIndex.previous}
                        css={css(buttonArrowStyle)}
                      >
                        <FaAngleLeft
                          css={css({
                            mr: 2,
                          })}
                        />
                      </button>
                      <button
                        onClick={() => {
                          productIndex.next &&
                            navigate(productIndex.next.fields.path)
                        }}
                        disabled={!productIndex.next}
                        css={css(buttonArrowStyle)}
                      >
                        <FaAngleRight
                          css={css({
                            ml: 2,
                          })}
                        />
                      </button>
                    </div>
                  </div>
                  <ProductPageProductInformation
                    longDescription={longDescription}
                    price={price}
                    name={name}
                    id={id}
                    url={fields.path}
                    mainPhoto={mainPhoto}
                  />
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </ProductLayout>
    </>
  )
}

const buttonArrowStyle = {
  display: `flex`,
  alignItems: `center`,
  border: `none`,
  background: `none`,
  cursor: `pointer`,
}

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug}) {
      id
      name
      price
      mainPhoto {
        id
        title
        file {
          url
        }
        fluid(maxWidth: 1200 maxHeight: 1200) {
          ...GatsbyContentfulFluid_withWebp
        }
        thumbnail: fixed(width: 75 height: 75) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      longDescription {
        childMarkdownRemark {
          html
        }
        internal {
          content
        }
      }
      productMedias {
        title
        id
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed {
          ...GatsbyContentfulFixed_withWebp
        }
        thumbnail: fixed(width: 75 height: 75) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      fields {
        path
      }
    }
    allContentfulProduct {
      edges {
        node {
          id
          name
        }
        previous {
          name
          fields {
            path
          }
        }
        next {
          name
          fields {
            path
          }
        }
      }
    }
  }
`

export default ProductTemplate