import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Waypoint } from 'react-waypoint'
import { css } from 'theme-ui' 

import SEO from '../components/seo'
import Layout from '../components/layout'
import Container from '../components/container'

import { mediaQueries, space } from "../utils/tokens"
import ProductPageGallery from '../components/product-page-gallery'
import ProductPageProductInformation from '../components/product-page-product-information'
import ProductPageGalleryThumbnailList from '../components/product-page-gallery-thumbnail-list'

const ProductTemplate = ({ data }) => {
  const {
     name,
     price,
     productMedias,
     longDescription
  } = data.contentfulProduct

  const [isGalleryBottom, setIsGalleryBottom] = useState(false)
  const [currentImageId, setCurrentImageId] = useState(0)

  console.log(currentImageId)

  return (
    <>
      <SEO />
      <Layout>
        <div>
          <section>
            <Container
              css={css({
                px: [4, 4, 5, 6],
              })}
            >
              <div
                css={css({
                  display: `flex`,
                  flexDirection: `column`,
                  [mediaQueries.lg]: {
                    flexDirection: `row`,
                  },
                })}
              >
                <aside
                  css={css({
                    width: `100%`,
                    mb: 5,
                    [mediaQueries.lg]: {
                      width: `60%`,
                      mb: 0,
                    },
                  })}
                >
                  <ProductPageGalleryThumbnailList
                    images={productMedias}
                    currentImageId={currentImageId}
                    css={css({
                      [mediaQueries.lg]: {
                        position: isGalleryBottom ? `absolute` : `fixed`,
                        top: `auto`,
                      },
                    })}
                  />
                  <ProductPageGallery
                    images={productMedias}
                    setCurrentImageId={id => {
                      console.log(id)
                      setCurrentImageId(id)
                    }}
                  />
                </aside>
                <aside
                  css={css({
                    [mediaQueries.lg]: {
                      position: `relative`,
                      display: `inline-block`,
                      verticalAlign: `top`,
                    },
                  })}
                >
                  <div
                    css={css({
                      position: `static`,
                    })}
                  >
                    <div
                      css={css({
                        [mediaQueries.lg]: {
                          position: isGalleryBottom ? `absolute` : `fixed`,
                          padding: `0 ${space[4]}px`,
                          top: `auto`,
                          right: `auto`,
                          bottom: `0`,
                          width: `40vw`,
                          mb: 6,
                        },
                      })}
                    >
                      <ProductPageProductInformation
                        longDescription={longDescription}
                        price={price}
                        name={name}
                      />
                    </div>
                  </div>
                </aside>
              </div>
              <Waypoint
                onEnter={() => {
                  console.log(`enter`)
                  setIsGalleryBottom(true)
                }}
                onLeave={() => setIsGalleryBottom(false)}
              />
            </Container>
          </section>
        </div>
      </Layout>
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