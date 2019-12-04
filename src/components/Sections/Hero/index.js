/**
 * This is the default hero component
 */

import React, { useRef } from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { Flex } from 'rebass'

import heroProptypes from './hero-prop-types'
import { headerHeight, mediaQueries, colors, space, maxWidth } from '../../../utils/tokens'
import WatchVideoButton from '../../watch-video-button'
import TrailingHeroText from '../../animated/trailing-hero-text'
import MatrixAnimation from '../../animated/matrix-animation'
import FadingIn from '../../animated/fading-in'
import FadeInChain from '../../animated/fade-in-word-by-word'

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

  ${mediaQueries.xxl} {
    max-width: ${maxWidth.xxl};
    margin-left: auto;
    margin-right: auto;
    height: unset;
  }
`

const Hero = (props) => {
  const { mainText, subText, media, videoUrl } = props

  return (
    <Section>
      <Flex
        pt={{
          xl: 5,
        }}
        flexDirection={{
          xs: "column",
          xl: "column",
        }}
        justifyContent="center"
        color={{
          xs: "white",
          xl: "black",
        }}
        css={css`
          position: absolute;
          z-index: 1;
          padding-left: ${space[4]}px;
          padding-right: ${space[4]}px;

          ${mediaQueries.xl} {
            position: initial;
            padding-left: ${space[6]}px;
            padding-right: ${space[6]}px;
          }
        `}
      >
        <h1>
          <TrailingHeroText text={mainText} />
        </h1>
        <p>
          <FadeInChain
            toggle
            items={subText.split(" ").map((word) => `${word} `)}
            configs={{
              delay: 1100,
            }}
          />
        </p>
        {videoUrl && (
          <FadingIn>
            <WatchVideoButton url={videoUrl} />
          </FadingIn>
        )}
      </Flex>
      {media && media.fluid && (
        <FadingIn css={css({
          width: `100%`,
          height: `100%`,
        })}>
          <Img
            fluid={media.fluid}
            alt={media.title}
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
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                background-color: ${colors.black};
                opacity: 0.2;
              }
            `}
          />
        </FadingIn>
      )}
    </Section>
  )
}

export default Hero

Hero.propTypes = heroProptypes
