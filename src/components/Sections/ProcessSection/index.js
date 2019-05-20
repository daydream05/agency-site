import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { mediaQueries, space, fontSizes, maxWidth, colors } from '../../../utils/tokens'

const Number = styled.span`
  font-weight: bold;
  font-size: ${fontSizes[1]};
  width: calc(${space[5]}px / 1.25);
  height: calc(${space[5]}px / 1.25);
  border: calc(${space[1]}px / 2) solid;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProcessLoader = props => {
  const { name, number, shortDescription, isActive } = props

  return (
    <div css={css`
      display: grid;
      grid-template-columns: auto 1fr;
      grid-gap: ${space[2]}px;
      align-items: center;
      color: ${colors.white};
      
      ${mediaQueries.xl} {
        color: ${colors.white};
        opacity: ${isActive ? 1 : 0.2};
      }
    `}>
      <Number>0{number}</Number>
      <h5 css={css`
        font-size: ${fontSizes[1]};
        margin-bottom: 0;
      `}>{name}</h5>
      <p css={css`
        grid-column: 2;
      `}>{shortDescription}</p>
    </div>
  )
}

const ProcessSection = (props) => {
  const { processList } = props
  return (
    <section
      css={css`
        display: grid;
        position: relative;
        ${mediaQueries.xl} {
          position: relative;
        }
      `}
    >
      <Img
        fluid={processList[0].media.fluid}
        css={css`
          height: 100%;
          width: 100%;
          position: absolute !important;

          ${mediaQueries.xl} {
            position: relative !important;
          }
        `}
      />
      <ul css={css`
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 0;
        position: relative;

        ${mediaQueries.xl} {
          flex-direction: row;
          position: absolute;
          max-width: ${maxWidth.xl};
          width: 100%;
          left: 0;
          right: 0;
          margin: 0 auto;
          bottom: ${space[5]}px;
          z-index: 1;
        }
      `}>
        {processList.map((item, index) => {
          const isFirst = index === 0
          return (
            <li key={item.id}
              css={css`
                flex: 1;
                margin: ${space[4]}px ${space[4]}px;

                ${mediaQueries.xl} {
                  margin: 0 ${space[2]}px;
                } 
              `}
            >
              <ProcessLoader
                key={item.id}
                name={item.name}
                number={index + 1}
                shortDescription={item.shortDescription}
                isActive={isFirst}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default ProcessSection