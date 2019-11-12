import { graphql } from "gatsby"

export const heroFragment = graphql`
  fragment HeroContentful_withMedia on ContentfulHero {
    mainTagline
    secondaryTagline
    type
    videoUrl
    media {
      id
      title
      fluid {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export const processSectionFragment = graphql`
  fragment ProcessSectionContentful on ContentfulProcessSection {
    tagline
    processes {
      id
      name
      shortDescription
      media {
        id
        title
        fluid(maxWidth: 3000 maxHeight: 1500, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
        mobileFluid: fluid {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`

export const projectSectionFragment = graphql`
  fragment ProjectSectionContentful on ContentfulProjectSection {
    tagline
    type
    projects {
      id
      name
      client
      tags {
        id
        name
      }
      coverPhoto {
        id
        title
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      slug
      fields {
        path
      }
    }
  }
`

export const clientSectionFragment = graphql`
  fragment ClientSectionContentful on ContentfulClientSection {
    tagline
    description {
      internal {
        content
      }
    }
    clientLogos {
      title
      fixed(width: 100) {
        ...GatsbyContentfulFixed_withWebp
      }
      fluid(maxHeight: 33) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export const contactSectionFragment = graphql`
  fragment ContactSectionContentful on ContentfulContactSection {
    tagline
    backgroundImage {
      title
      fluid(quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
  }
`

export const textSectionFragment = graphql`
  fragment TextSectionContentful on ContentfulTextSection {
    tagline
    title
    body {
      childMarkdownRemark {
        html
      }
    }
  }
`

export const testimonialSection = graphql`
  fragment TestimonialSectionContentful on ContentfulTestimonialSection {
    title
    testimonials {
      id
      name: reviewerName
      message: reviewerMessage {
        internal {
          content
        }
      }
      jobTitle: reviewerTitle
      photo: reviewerPhoto {
        title
        fluid(maxWidth: 90 maxHeight: 90) {
          ...GatsbyContentfulFluid_withWebp
        }
        fixed(width: 90 height: 90) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`

export const featureSection = graphql`
  fragment FeatureSectionContentful on ContentfulFeatureSection {
    type
    featuresList {
      id
      title
      subtitle
      description {
        internal {
          content
        }
      }
      image {
        title
        fluid(maxWidth: 2000 maxHeight: 1600) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`