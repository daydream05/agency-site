import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SectionMapper from "../components/Sections/SectionMapper"

const ProjectTemplate = ({ data }) => {
  const { title, metaDescription, fields } = data.contentfulProject
  return <Layout />
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      fields {
        path
      }
    }
  }
`

export default ProjectTemplate
