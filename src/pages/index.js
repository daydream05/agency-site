import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionMapper from '../components/Sections/SectionMapper'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <SectionMapper
        sections={data.contentfulPage.sections}
      />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    contentfulPage(slug: { eq: "home" }) {
      sections {
        __typename
        ... on ContentfulHero {
          mainTagline
          secondaryTagline
          media {
            id
            title
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
        ... on ContentfulProcessSection {
          tagline
          processes {
            id
            name
            shortDescription
            media {
              id
            }
          }
        }
        ... on ContentfulProjectSection {
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
      }
    }
  }
`
