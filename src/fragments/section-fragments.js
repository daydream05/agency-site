import { graphql } from "gatsby"

export const heroFragment = graphql`
  fragment HeroContentful_withMedia on ContentfulHero {
    mainTagline
    secondaryTagline
    type
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
        fluid {
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
