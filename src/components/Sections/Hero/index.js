import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { Flex } from 'rebass'

import { headerHeight, mediaQueries, colors } from '../../../utils/tokens'

const Section = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  height: 100vh;

  ${mediaQueries.xl} {
    display: grid;
    grid-template-columns: 2fr 3fr;
    margin-top: ${headerHeight};
    height: calc(100vh - ${headerHeight});
    overflow: hidden;
    align-items: flex-start;
  }
`

const Hero = (props) => {
  const { mainText, subText, media} = props
  return (
    <Section>
      <Flex
        px={{
          xs: 0,
          xl: 7,
        }}
        pt={{
          xl: 5,
        }}
        flexDirection={{
          xs: "column",
          xl: "column",
        }}
        justifyContent="center"
        color={{
          xs: 'white',
          xl: 'black',
        }}
        px={{
          x: 3,
          xl: 6,
        }}
        css={css`
          position: absolute;
          z-index: 1;

          ${mediaQueries.lg} {
            position: initial;
          }
        `}
      >
        <h1 css={css`
        `}>{mainText}</h1>
        <p>{subText}</p>
      </Flex>
      {media && media.fluid && 
        <Img
          fluid={media.fluid} alt={media.title}
          css={css`
            position: absolute !important;
            width: 100%;
            height: 100%;
            position: relative;

            ${mediaQueries.lg} {
              position: relative !important;
              grid-column: 2;
            }

            &::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              background-color: ${colors.black};
              opacity: 0.2;
            }
          `}
        />}
    </Section>
  )
}

export default Hero

Hero.propTypes = {
  mainText: PropTypes.string,
  subText: PropTypes.string,
  media: PropTypes.object,
}