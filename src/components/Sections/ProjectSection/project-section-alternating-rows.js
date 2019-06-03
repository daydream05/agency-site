import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { FaAngleRight } from 'react-icons/fa'

import { fontSizes, mediaQueries, space, letterSpacings, lineHeights } from '../../../utils/tokens'

import { Section } from '../../StyledComponents'

import LinkWithArrow from '../../link-with-arrow'

const ProjectCard = (props) => {
  const { name, client, tags, number, media, url, totalProjects } = props

  const ProjectCardRoot = styled.div`
    display: flex;
    flex-direction: column-reverse;

    ${mediaQueries.lg} {
      flex-direction: ${number % 2 !== 0 ? `row-reverse` : `row`};
      padding: ${space[5]}px 0;
      > :first-child {
        flex: 2;
      }

      > :last-child {
        flex: 3;
      }
    }
  `

  return (
    <ProjectCardRoot>
      <div css={css`
        padding: ${space[5]}px ${space[4]}px;

        ${mediaQueries.lg} {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0%;
        }
      `}>
        <div css={css`

          ${mediaQueries.lg} {
            max-width: 360px;
          }
        `}>
          <span css={css`
            display: block;
            font-weight: bold;
            font-size: calc(${fontSizes[0]} - 2px);
            letter-spacing: ${letterSpacings.mega};
            margin-bottom: ${space[3]}px;
            ${mediaQueries.lg} {
              margin-bottom: ${space[6]}px;
            }
          `}>0{number} / 0{totalProjects}</span>
          <h2
            css={css`
            line-height: ${lineHeights.solid};

            ${mediaQueries.lg} {
              font-size: ${fontSizes[6]};
            }
          `}>{name}</h2>
          <span>Client: {client}</span>
          <div>
            {tags && tags.map((tag, i) => {
              const isLast = tags.length === i + 1
              return (
                <span
                  key={tag.id}
                >{tag.name}{!isLast ? `, ` : null}</span>
              )
            })}
          </div>
          <LinkWithArrow to={url} text="Discover" />
        </div>
      </div>
      <div css={css`
        width: 100%;
        height: 100%;
      `}>
        <Img
          css={css`
            ${mediaQueries.lg} {
              > :first-child {
                padding-bottom: 56.25% !important;
              }
            }
          `}
          fluid={media.fluid}
          alt={media.title}
        />
      </div>
    </ProjectCardRoot>
  )
}

const ProjectSectionAlternatingRows = (props) => {
  const { projectList } = props

  return (
    <Section
      py={{
        xs: 0,
        lg: 6,
      }}
    >
      <div>
        {projectList.map((project, index) => {
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              client={project.client}
              tags={project.tags}
              number={index + 1}
              media={project.coverPhoto}
              url={project.fields.path}
              totalProjects={projectList.length}
            />
        )})}
      </div>
    </Section>
  )
}

export default ProjectSectionAlternatingRows
