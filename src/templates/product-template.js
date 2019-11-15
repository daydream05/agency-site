import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { css } from 'theme-ui' 

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
     longDescription
  } = data.contentfulProduct

  const [currentImageId, setCurrentImageId] = useState(0)

  console.log(currentImageId)

  return (
    <>
      <SEO />
      <ProductLayout>
        <section
          css={css({
            py: [headerHeight, headerHeight, headerHeight, 0],
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
                  [mediaQueries.lg]: {
                    mb: 0,
                  },
                })}
              >
                <ProductPageGallery
                  images={productMedias}
                  setCurrentImageId={id => {
                    console.log(id)
                    setCurrentImageId(id)
                  }}
                />
              </aside>
              <aside>
                <div
                  css={css({
                    px: 4,
                    [mediaQueries.lg]: {
                      padding: `0 ${space[4]}px`,
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      height: `100%`,
                    },
                  })}
                >
                  <ProductPageProductInformation
                    longDescription={longDescription}
                    price={price}
                    name={name}
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

export const query = graphql`
  query($slug: String!) {
    contentfulProduct(slug: { eq: $slug}) {
      name
      price
      mainPhoto {
        title
        fluid(maxWidth: 1200 maxHeight: 1200) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      longDescription {
        childMarkdownRemark {
          html
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
    }
  }
`

export default ProductTemplate