import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SectionMapper from "../components/Sections/SectionMapper"
import SEO from '../components/seo'

const PageTemplate = ({ data, location }) => {
  const { title, metaDescription, metaTitle, sections } = data.contentfulPage

  const pagesWithLightBackground = [`/about/`, `/store/`]
  let darkMobileMenu = false
  if(pagesWithLightBackground.includes(location.pathname)) {
    darkMobileMenu = true
  }
  
  return (
    <>
      <SEO
        description={metaDescription.internal.content}
        title={metaTitle || title}
      />
      <Layout darkMobileMenu={darkMobileMenu}>{sections && <SectionMapper sections={sections} />}</Layout>
    </>
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
        ... on ContentfulClientSection {
          ...ClientSectionContentful
        }
        ... on ContentfulContactSection {
          ...ContactSectionContentful
        }
        ... on ContentfulTextSection {
          ...TextSectionContentful
        }
        ... on ContentfulTestimonialSection {
          ...TestimonialSectionContentful
        }
        ... on ContentfulCallToActionSection {
          ...CallToActionSectionContentful
        }
         ... on ContentfulFeatureSection {
          ...FeatureSectionContentful
        }
      }
      metaDescription {
        internal {
          content
        }
      }
      metaTitle
    }
  }
`

export default PageTemplate
