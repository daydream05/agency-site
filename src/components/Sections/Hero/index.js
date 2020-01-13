/**
 * This is the default hero component
 */

import React, { Suspense } from 'react'
import { Dom, Canvas } from 'react-three-fiber'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { Flex } from 'rebass'

import heroProptypes from './hero-prop-types'
import { headerHeight, mediaQueries, colors, space, maxWidth } from '../../../utils/tokens'
import WatchVideoButton from '../../watch-video-button'
import TrailingHeroText from '../../animated/trailing-hero-text'
import FadingIn from '../../animated/fading-in'
import FadeInWordByWord from "../../animated/fade-in-word-by-word"

import ImageTexture from '../../three/ImageTexture'

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
  console.log(media)
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
          <FadeInWordByWord
            toggle
            text={subText}
            configs={{
              delay: 1500,
            }}
          />
        </p>
        {videoUrl && (
          <FadingIn
            configs={{
              delay: 2500,
            }}
            toggle
          >
            <WatchVideoButton url={videoUrl} />
          </FadingIn>
        )}
      </Flex>
      <Canvas>
        <Suspense fallback={<Dom className="loading">Wait you must...</Dom>}>
          <ImageTexture url={`https:${media.file.url}`} />
        </Suspense>
      </Canvas>
    </Section>
  )
}

export default Hero

Hero.propTypes = heroProptypes
