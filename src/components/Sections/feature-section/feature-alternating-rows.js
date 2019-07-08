import React from 'react'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'

import theme from '../../../utils/theme'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${theme.mediaQueries.lg} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: ${theme.space[3]}px ${theme.space[5]}px;
  }
`

const FeatureContainer = styled.div`
  padding: ${theme.space[5]}px ${theme.space[4]}px;

  > * {
    margin-bottom: ${theme.space[5]}px;
  }
  ${theme.mediaQueries.lg} {
    padding: ${theme.space[6]}px ${theme.space[5]}px ${theme.space[5]}px;
    max-width: ${theme.maxWidth.xl};
    margin: auto;

    > * {
      margin-bottom: ${theme.space[6]}px;
    }

    > :nth-child(odd) {
      padding-right: ${theme.space[6]}px;
    }

    > :nth-child(even) {
      padding-left: ${theme.space[6]}px;
    }
  }

  ${theme.mediaQueries.xl} {
    padding-left: ${theme.space[6]}px;
    padding-right: ${theme.space[6]}px;
    max-width: ${theme.maxWidth.xxl};
  }
`
const FeatureAlternatingRows = (props) => {
  const { featuresList } = props

  return (
    <section
      css={css`
        background-color: ${theme.colors.grey.light};
      `}
    >
      <FeatureContainer>
        {featuresList.map((feature, index) => {
          const isOdd = index % 2 !== 0
          return (
            <CardContainer key={feature.id}>
              <h3
                css={css`
                  grid-row: 1;
                  grid-column: ${isOdd ? 1 : 2};
                `}
              >
                {feature.title}
              </h3>
              <h4
                css={css`
                  grid-row: 1;
                  grid-column: ${isOdd ? 2 : 1};
                  font-size: ${theme.fontSizes[1]};
                `}
              >
                — {feature.subtitle}
              </h4>
              <p
                css={css`
                  grid-row: 2;
                  grid-column: ${isOdd ? 1 : 2};
                `}
              >
                {feature.description.internal.content}
              </p>
              <Img
                fluid={feature.image.fluid}
                alt={feature.image.title}
                css={css`
                  order: -1;
                  margin-bottom: ${theme.space[3]}px;
                  ${theme.mediaQueries.lg} {
                    margin-bottom: 0;
                  }
                `}
              />
            </CardContainer>
          )
        })}
      </FeatureContainer>
    </section>
  )
}

export default FeatureAlternatingRows