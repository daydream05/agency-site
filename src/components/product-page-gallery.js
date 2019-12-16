import React, { useState, useRef } from 'react'
import { useSpring, a } from 'react-spring'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { css } from 'theme-ui' 
import styled from 'styled-components'
import { mediaQueries, colors } from '../utils/tokens'


const ImageAnimationContainer = styled(a.div)`
  position: relative !important;

  ${mediaQueries.lg} {
    position: absolute !important;
  }
`
const ProductPageGallery = (props) => {
  const {
    images,
    mainPhoto,
    toggle,
    startingStyle,
  } = props

  const initialImage = images ? images[0] : mainPhoto

  const [selectedImage, setSelectedImage] = useState(initialImage)

  // we don't animate if the starting style wasn't passed through

  let gatsbyWindow
  let isMobile

  if(typeof window !== `undefined`) {
    gatsbyWindow = window
    isMobile = window.innerWidth < 1000
  }

  const innerHeight = gatsbyWindow ? gatsbyWindow.innerHeight : 100
  const innerWidth = gatsbyWindow ? gatsbyWindow.innerWidth : 100

  const vhToPixel = value => (innerHeight * value) / 100
  const vwToPixel = value => (innerWidth * value) / 100



  const endingStyle = {
    top: 0,
    left: 0,
    width: isMobile ? 100 : 58.3,
    height: isMobile ? 50 : 100,
  }

  const initialStyle = startingStyle ? {
    top: startingStyle.top,
    left: startingStyle.left,
    width: isMobile ? vwToPixel(100) : startingStyle.width,
    height: isMobile ? vhToPixel(50) : startingStyle.height,
  } : {
    top: endingStyle.top,
    left: endingStyle.left,
    width: vwToPixel(endingStyle.width),
    height: vhToPixel(endingStyle.height),
  }

  console.log(initialStyle)

  const animatedSpring = useSpring({
    height: toggle ? vhToPixel(endingStyle.height) : initialStyle.height,
    width: toggle ? vwToPixel(endingStyle.width) : initialStyle.width,
    top: toggle ? endingStyle.top : initialStyle.top,
    left: toggle ? endingStyle.left : initialStyle.left,
    from: {
      height: initialStyle.height,
      width: initialStyle.width,
      top: initialStyle.top,
      left: initialStyle.left,
    },
  })

  return (
    <div
      css={css({
        position: `relative`,
        [mediaQueries.lg]: {
          display: `grid`,
          gridGap: 3,
          gridTemplateColumns: `1fr auto`,
          height: `100vh`,
        },
      })}
      className={props.className}
    >
      <ImageAnimationContainer
        style={{
          ...animatedSpring,
        }}
      >
        <div>
          {selectedImage && (
            <Img
              key={selectedImage.id}
              fluid={selectedImage.fluid}
              alt={selectedImage.title}
              css={css({
                height: `50vh`,
                zIndex: 2,
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
      </ImageAnimationContainer>
      <div
        css={css({
          position: `relative`,
          overflow: `hidden`,
          [mediaQueries.lg]: {
            alignSelf: `center`,
            zIndex: 3,
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
              display: `flex`,
              flexDirection: `column`,
              alignItems: `flex-end`,
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
                      mb: 2,
                    },
                  })}
                >
                  <button
                    onClick={() => setSelectedImage(images[id])}
                    css={css({
                      cursor: `pointer`,
                      border: `none`,
                      padding: 0,
                      display: `block`,
                      boxSizing: `border-box`,
                      ":focus": {
                        outline: `2px solid ${colors.accent}`,
                        outlineOffset: `2px`,
                        boxSizing: `border-box`,
                      },
                    })}
                  >
                    <Img
                      fixed={image.thumbnail}
                      alt={image.title}
                      css={css({
                        display: `block !important`,
                      })}
                    />
                  </button>
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