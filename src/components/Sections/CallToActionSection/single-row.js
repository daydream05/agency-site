import React from 'react'
import PropTypes from 'prop-types'
import { navigate, graphql, useStaticQuery } from 'gatsby'
import { css } from 'styled-components'

import { space, mediaQueries, colors } from '../../../utils/tokens'

import { Section } from '../../StyledComponents'
import Button from '../../Buttons'

const SingleRow = (props) => {
  const {
    tagline,
    subTagline,
    buttonText,
  } = props

  const data = useStaticQuery(query)

  return (
    <Section
      css={css`
        background-color: ${colors.black};
        color: ${colors.white};
        padding: ${space[5]}px ${space[4]}px;

        h1,h2,h3,h4,h5,h6 {
          color: ${colors.white};
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
      <h3
        css={css`
          margin-bottom: ${space[4]}px;

          ${mediaQueries.lg} {
            margin-bottom: 0;
          }
        `}
      >{tagline}</h3>
      <p
        css={css`
          margin-bottom: ${space[3]}px;

          ${mediaQueries.lg} {
            margin-bottom: 0;
          }
        `}
      >{subTagline}</p>
      <Button
        variant="default"
        onClick={() => navigate(data.contentfulPage.fields.path)}
      >{buttonText}</Button>
    </Section>
  )
}

export default SingleRow

const query = graphql`
  query {
    contentfulPage(slug: { eq: "contact" }) {
      fields {
        path
      }
    }
  }
`


SingleRow.propTypes = {
  tagline: PropTypes.string,
  subTagline: PropTypes.string,
}
