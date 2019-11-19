import { graphql } from "gatsby"

export const contentfulPageWithSections = graphql`
  fragment ContentfulPage_withSections on ContentfulPage {
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
`
