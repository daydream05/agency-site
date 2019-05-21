/**
 * This is the bottom image hero component
 */
import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { Flex } from 'rebass'

import heroProptypes from './hero-prop-types'
import {
  space,
  headerHeight,
  mediaQueries,
  maxWidth
} from '../../../utils/tokens'

const BottomImageHeroRoot = styled.section`
  padding-top: ${headerHeight};
  padding-left: ${space[4]}px;
  padding-right: ${space[4]}px;

  ${mediaQueries.xl} {
    padding-top: calc(${headerHeight} + ${space[5]}px);
    padding-left: ${space[6]}px;
    padding-right: ${space[6]}px;
  }
`

const BottomImageHero = (props) => {
  const { mainText, subText, media } = props
  return (
    <BottomImageHeroRoot>
      <Flex
        flexDirection={{
          xs: 'column',
          lg: 'row',
        }}
        alignItems={{
          lg: 'center',
        }}
        css={css`
          > :first-child {
            flex: 3;
          }

          ${mediaQueries.xl} {
            margin-bottom: ${space[5]}px;
          }
        `}
      >
        <h1 css={css`
          margin-bottom: ${space[3]}px;
        `}>{mainText}</h1>
        <div css={css`
            ${mediaQueries.xl} {
              flex: 2;
            }
          `}>
          <p css={css`
            ${mediaQueries.xl} {
              width: 50%;
            }
          `}>{subText}</p>
        </div>
      </Flex>
      <Img
        css={css`
          > :first-child {
            padding-bottom: 42.55% !important;
          }
        `}
        alt={media.title}
        fluid={media.fluid}
      />
    </BottomImageHeroRoot>
  )
}

export default BottomImageHero

BottomImageHero.propTypes = heroProptypes