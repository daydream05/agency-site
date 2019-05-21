import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SectionMapper from '../components/Sections/SectionMapper'

const PageTemplate = ({ data }) => {
  const {
    title,
    metaDescription,
    sections,
  } = data.contentfulPage
  return (
    <Layout>
      {sections &&
        <SectionMapper
          sections={sections}
        />}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      title
      sections {
        __typename
        ... on ContentfulHero {
          ...HeroContentful_withMedia
        }
        ... on ContentfulProcessSection {
          ...ProcessSectionContentful
        }
        ... on ContentfulProjectSection {
          ...ProjectSectionContentful
        }
      }
      metaDescription {
        internal {
          content
        }
      }
    } 
  }
 `

 export default PageTemplate