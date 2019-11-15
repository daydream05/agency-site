import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from 'theme-ui' 
import { mediaQueries } from '../utils/tokens'
import { Waypoint } from 'react-waypoint'

const ProductPageGallery = (props) => {
  const {
    images,
    setCurrentImageId,
  } = props

  return (
    <div className={props.className}>
      {images &&
        images.map((image, id) => {
          return (
            <Waypoint
              key={image.id}
              bottomOffset="20%"
              onEnter={() => setCurrentImageId(id)}
            >
              <div>
                <Img
                  fluid={image.fluid}
                  alt={image.title}
                  css={css({
                    [mediaQueries.lg]: {
                      height: `calc(100vh)`,
                      width: `auto`,
                    },
                  })}
                />
              </div>
            </Waypoint>
          )
        })}
    </div>
  )
}

export default ProductPageGallery

ProductPageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}