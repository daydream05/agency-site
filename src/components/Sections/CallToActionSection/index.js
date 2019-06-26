import React from 'react'
import { graphql } from 'gatsby'

import SingleRow from './single-row'

const Selector = (props) => {
  const {
    tagline,
    subTagline,
    buttonText,
    buttonHasIcon,
    backgroundColor
  } = props

  return (
    <SingleRow
      tagline={tagline}
      subTagline={subTagline}
      buttonText={buttonText}
      buttonHasIcon={buttonHasIcon}
      backgroundColor={backgroundColor}
    />
  )
}

export default Selector
  
export const callToActionSectionFragment = graphql`
  fragment CallToActionSectionContentful on ContentfulCallToActionSection {
    tagline
    subTagline
    buttonText
    buttonHasIcon
    backgroundColor
  }
`