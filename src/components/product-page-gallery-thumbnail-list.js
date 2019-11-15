import React from 'react'
import Img from 'gatsby-image'
import { css } from 'theme-ui'

const ProductPageGalleryThumbnailList = (props) => {
  const { images, currentImageId } = props

  return (
    <ul
      css={css({
        listStyle: `none`,
        position: `fixed`,
        left: 0,
        bottom: 0,
        zIndex: 1,
        mb: 6,
      })}
      className={props.className}
    >
      {images &&
        images.map((image, idx) => {
          return (
            <li
              key={images.id}
              css={css({
                margin: 0,
                opacity: currentImageId === idx ? 1 : 0.5,
              })}
            >
              <Img fixed={image.thumbnail} alt={image.title} />
            </li>
          )
        })}
    </ul>
  )
}

export default ProductPageGalleryThumbnailList