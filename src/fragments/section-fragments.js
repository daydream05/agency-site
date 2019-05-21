import { graphql } from 'gatsby'

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

export const processFragment = graphql`
  fragment ProcessSectionContentful on ContentfulProcessSection {
    tagline
    processes {
      id
      name
      shortDescription
      media {
        id
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

export const projectFragment = graphql`
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
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      slug
    }
  }
`