import React from 'react'
import styled, { css } from 'styled-components'
import { chunk } from 'lodash'

import { fontSizes, space, colors, maxWidth, mediaQueries } from '../../../utils/tokens'

const Title = styled.h2`
  font-weight: bold;
  font-size: ${fontSizes[4]};
  color: #000000;
  letter-spacing: -2px;
  line-height: 60px;
  margin-bottom: ${space[2]}px;
  
  ${mediaQueries.lg} {
    flex: 3;
  }
`

const Container = styled.section`
  padding: ${space[4]}px ${space[4]}px;
  max-width: ${maxWidth.xl};
  margin: auto;

  ${mediaQueries.lg} {
    padding: ${space[6]}px ${space[6]}px;
  }
`

const SectionDescription = styled.div`
  font-size: ${fontSizes[1]};
  color: ${colors.grey.reallyDark};
  ${mediaQueries.lg} {
    flex: 2;
  }
`

const ClientSection = (props) => {
  const { mainText, subText, clientLogos } = props
  const chunkedClientLogos = chunk(clientLogos, 4)
  return (
    <section css={css`
      background-color: ${colors.white};
    `}>
    <Container>
      <div css={css`
        display: flex;
        flex-direction: column;

        ${mediaQueries.lg} {
          flex-direction: row;
          margin-bottom: ${space[6]}px;
        }
      `}>
        <Title>{mainText}</Title>
        <SectionDescription>
            <span css={css`
              display: block;
              color: ${colors.black};
              font-weight: bold;
              margin-bottom: ${space[2]}px;
            `}>— We worked with</span>
          <p>{subText}</p>
        </SectionDescription>
      </div>
      {chunkedClientLogos.map((row, index) => {
        return (
          <div
            key={index}
            css={css`
              display: inline-flex;
              flex-direction: column;
              width: 50%;

              ${mediaQueries.lg} {
                display: flex;
                flex-direction: row;
                width: 100%;
              }
            `}
          >
            {row.map((logo, index) => {
              return (
              <div
                key={index}
                css={css`
                  margin-bottom: ${space[4]}px;
                  flex: 0 0 25%;
                  display: flex;
                  justify-content: center;
                `}
              >
                <img
                  src={logo.fluid.src}
                  alt={logo.title}
                  key={index}
                  css={css`
                  height: 33px;
                  filter: grayscale(1);
                  opacity: 0.5;
                  
                `}
                />
              </div>
              )
            })}
          </div>
        )
      })}
    </Container>
    </section>
  )
}

export default ClientSection