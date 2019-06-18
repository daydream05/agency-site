import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'styled-components'

import { space, mediaQueries, colors } from '../../../utils/tokens'

import { Section } from '../../StyledComponents'
import Button from '../../Buttons'

const SingleRow = (props) => {
  const {
    tagline,
    subTagline,
    backgroundColor,
    buttonText,
  } = props

  return (
    <Section
      css={css`
        background-color: ${colors.black};
        color: ${colors.white};

        h1,h2,h3,h4,h5,h6 {
          color: ${colors.white};
          margin-bottom: 0;
        }

        p {
          margin-bottom: 0;
        }

        ${mediaQueries.lg} {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          grid-gap: ${space[6]}px;
          padding: ${space[6]}px ${space[7]}px;
          align-items: flex-start;
        }
      `}
    >
      <h3>{tagline}</h3>
      <p>{subTagline}</p>
      <Button
        variant="default"
        width="75%"
      >{buttonText}</Button>
    </Section>
  )
}

export default SingleRow

SingleRow.propTypes = {
  tagline: PropTypes.string,
  subTagline: PropTypes.string,
}
