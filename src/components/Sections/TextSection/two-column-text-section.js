import React from 'react'
import { css } from 'styled-components'

import { space, mediaQueries, fontSizes, lineHeights, letterSpacings } from '../../../utils/tokens'

import { Section } from '../../StyledComponents'

const TwoColumnTextSection = (props) => {
  const { mainText, title, body } = props
  console.log(props)

  return (
    <Section
      px={{
        xs: 4,
        lg: 7,
      }}
      py={{
        xs: 5,
        lg: 6,
      }}
    >
      <div css={css`
        ${mediaQueries.lg} {
          display: grid;
          grid-gap: ${space[6]}px;
          grid-template-columns: 1fr 1fr;
        }
      `}>
        <div>
          <h2
            css={css`
              margin-bottom: ${space[4]}px;
              font-size: ${fontSizes[1]};
              line-height: ${lineHeights.dense};
              letter-spacing: ${letterSpacings.normal};
          `}>{title}</h2>
          <h4>{mainText}</h4>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: body }}
          css={css`
            ul {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-column-gap: ${space[3]}px;
              list-style: none;
              margin: 0;

              ${mediaQueries.lg} {
                grid-column-gap: ${space[5]}px;
              }
            }
          `}
        />
      </div>
    </Section>
  )
}

export default TwoColumnTextSection