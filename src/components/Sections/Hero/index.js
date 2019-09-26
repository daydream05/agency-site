/**
 * This is the default hero component
 */

import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { Flex } from 'rebass'
import { FaPlay } from 'react-icons/fa'

import Button from '../../Buttons'

import heroProptypes from './hero-prop-types'
import { headerHeight, mediaQueries, colors, space, maxWidth } from '../../../utils/tokens'

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
  const { mainText, subText, media, buttonText } = props
  console.log('im here', buttonText)
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
        <h1 css={css``}>{mainText}</h1>
        <p>{subText}</p>
        {buttonText && (
          <Button
            variant="default"
            css={css`
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            Watch the video
            <FaPlay
              css={css`
                margin-left: ${space[2]}px;
              `}
            />
          </Button>
        )}
      </Flex>
      {media && media.fluid && (
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
      )}
    </Section>
  )
}

export default Hero

Hero.propTypes = heroProptypes
