import React from "react"
import Img from 'gatsby-image'
import { graphql } from "gatsby"
import { css } from 'theme-ui'

import { breakpoints } from '../utils/tokens'

import Layout from "../components/layout"
import SectionMapper from "../components/Sections/SectionMapper"
import SEO from "../components/seo";
import TagsList from '../components/tags-list'

const ProjectTemplate = ({ data }) => {
  const {
    name,
    client,
    tags,
    metaDescription,
    coverPhoto,
    sections,
    shortDescription
  } = data.contentfulProject
  return (
    <Layout>
      <SEO description={metaDescription} title={name} />
      <div
        css={css({
          mt: 6,
          px: [4, 4, 4, 4, 6, 0],
          maxWidth: [``, ``, ``, breakpoints.xl],
          mx: `auto`,
          display: [``, ``, ``, ``, `grid`],
          gridTemplateColumns: `1fr 1fr`,
          gridColumnGap: 5,
        })}
      >
        <h1
          css={css({
            pl: [0, 0, 0, 0, 5],
          })}
        >
          {name}
        </h1>
        {shortDescription && (
          <div
            css={css({
              gridColumn: 1,
              mb: 4,
              pl: [0, 0, 0, 0, 5],
            })}
            dangerouslySetInnerHTML={{
              __html: shortDescription.childMarkdownRemark.html
            }}
          />
        )}
        <div
          css={css({
            justifySelf: `center`,
          })}
        >
          <div>
            <span
              css={css({
                fontWeight: `bold`,
                mr: 1,
              })}
            >
              Client:
            </span>
            <span>{client}</span>
          </div>
          <div
            css={css({
              mb: 4,
            })}
          >
            <span
              css={css({
                fontWeight: `bold`,
                mr: 1,
              })}
            >
              Services provided:
            </span>
            <TagsList
              tags={tags}
            />
          </div>
        </div>
        {coverPhoto && (
          <Img
            fluid={coverPhoto.fluid}
            alt={coverPhoto.title}
            css={css({
              gridColumn: `1 / span 2`,
            })}
          />
        )}
      </div>
      {sections && <SectionMapper />}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      name
      client
      shortDescription {
        childMarkdownRemark {
          html
        } 
      }
      tags {
        name
        id
      }
      coverPhoto {
        title
        fluid(maxWidth: 3000 maxHeight: 1500 quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      fields {
        path
      }
    }
  }
`

export default ProjectTemplate
