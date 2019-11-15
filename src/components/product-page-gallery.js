import React, { useState} from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from 'theme-ui' 
import { mediaQueries } from '../utils/tokens'

const ProductPageGallery = (props) => {
  const {
    images,
  } = props

  const initialImage = images && images[0]
  const [selectedImage, setSelectedImage] = useState(initialImage)

  return (
    <div
      css={css({
        [mediaQueries.lg]: {
          display: `grid`,
          gridGap: 3,
          gridTemplateColumns: `1fr auto`,
        },
      })}
      className={props.className}
    >
      <div>
        {selectedImage && (
          <Img
            key={selectedImage.id}
            fluid={selectedImage.fluid}
            alt={selectedImage.title}
            css={css({
              height: `50vh`,
              [mediaQueries.lg]: {
                height: `calc(100vh)`,
                width: `100%`,
              },
              [mediaQueries.xxxl]: {
                height: `auto`,
              },
            })}
          />
        )}
      </div>
      <div
        css={css({
          position: `relative`,
          overflow: `hidden`,
          [mediaQueries.lg]: {
            alignSelf: `center`,
          },
        })}
      >
        <ul
          css={css({
            margin: 0,
            listStyle: `none`,
            display: `inline-flex`,
            overflowX: `scroll`,
            maxWidth: `1200px`,
            width: `100%`,
            px: 4,
            mt: 3,
            [mediaQueries.lg]: {
              display: `block`,
              px: 0,
              mt: 0,
            },
          })}
        >
          {images &&
            images.map((image, id) => {
              return (
                <li
                  key={id}
                  css={css({
                    mb: 0,
                    mr: 3,
                    cursor: `pointer`,
                    opacity: selectedImage.id === image.id ? 1 : 0.5,
                    [mediaQueries.lg]: {
                      mr: 0,
                    },
                  })}
                >
                  <a onClick={() => setSelectedImage(images[id])}>
                    <Img fixed={image.thumbnail} alt={image.title} />
                  </a>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default ProductPageGallery

ProductPageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}