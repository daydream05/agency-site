import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { space, backgroundColor } from 'styled-system'

import { fontSizes, mediaQueries, maxWidth, space as tokenSpace, colors, letterSpacings } from '../../../utils/tokens' 

import { projectSectionPropTypes, projectCardPropTypes } from './prop-types'

import LinkWithArrow from '../../link-with-arrow'

const ProjectCardRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CardTitle = styled.h2`
  ${space};
`
const ProjectCard = (props) => {
  const { name, client, tags, media, number, url } = props

  console.log(`what is this`, url)

  return (
    <ProjectCardRoot>
      <div css={css`
        position: relative;
        width: 100%;
      `}>
        {media ?
          <Img
            fluid={media.fluid}
            alt={media.title}
            css={css`
            flex: 1;
            min-height: 450px;
            max-height: 450px;
          `}
          /> :
          <div css={css`
            min-height: 450px;
            max-height: 450px;
            background-color: ${colors.grey.reallyDark};
          `}/>
        }
        <div css={css`
          position: absolute;
          bottom: 0;
          right: 0;
          height: ${tokenSpace[5]}px;
          width: ${tokenSpace[5]}px;
          background-color: ${colors.grey.light};
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
          <span css={css`
            font-weight: bold;
            font-size: calc(${fontSizes[0]} - 2px);
            letter-spacing: ${letterSpacings.mega};
          `}>0{number}</span>
        </div>
      </div>
      <div>
        <CardTitle mt={4}>{name}</CardTitle>
        <div>
          {client && <span>Client: {client}</span>}
        </div>
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
    </ProjectCardRoot>
  )
}

ProjectCard.propTypes = projectCardPropTypes

ProjectCard.defaultProps = {
  name: 'Project name',
  client: null,
  tags: null,
  media: null,
  number: 0,
}

const Section = styled.section`
  ${space};
  ${backgroundColor};
`

const ProjectSectionColumns = (props) => {
  const { projectList } = props
  return (
    <Section
      py={{
        xs: 5,
        xl: 7,
      }}
      px={{
        xs: 4,
      }}
      bg='grey.light'
    >
      <div css={css`
        display: grid;
        grid-gap: ${tokenSpace[5]}px;
        ${mediaQueries.xl} {
          grid-gap: ${tokenSpace[4]}px;
          grid-template-columns: repeat(3, 1fr);
          max-width: ${maxWidth.xl};
          margin: auto;
        }
      `}>
        {projectList.map((project, index) =>{
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              client={project.client}
              tags={project.tags}
              number={index + 1}
              media={project.coverPhoto}
              url={project.fields.path}
            />
        )})}
      </div>
    </Section>
  )
}

ProjectSectionColumns.propTypes = projectSectionPropTypes

export default ProjectSectionColumns