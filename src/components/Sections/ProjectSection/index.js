import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { space, backgroundColor } from 'styled-system'

import { FaAngleRight } from 'react-icons/fa'

import { fontSizes, mediaQueries, maxWidth, space as tokenSpace, colors, letterSpacings } from '../../../utils/tokens' 

const ProjectCardRoot = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const CardTitle = styled.h2`
  ${space};
`
const ProjectCard = (props) => {
  const { name, client, tags, media, number } = props

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
      </div>
      <Link
        to=""
        css={css`
          font-weight: bold;
          font-size: calc(${fontSizes[0]} - 2px);
          letter-spacing: ${letterSpacings.mega};
          text-transform: uppercase;
          display: flex;
          align-items: center;
          margin-top: ${tokenSpace[5]}px;
        `}
      >
      <span css={css`
        margin-right: ${tokenSpace[3]}px;
      `}>Discover</span>
      <FaAngleRight
        css={css`
          font-size: ${fontSizes[2]};
          color: ${colors.accent};
        `}
      />
      </Link>
    </ProjectCardRoot>
  )
}

ProjectCard.propTypes = {
  name: PropTypes.string,
  client: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  media: PropTypes.shape({
    fluid: PropTypes.object,
    title: PropTypes.string,
  }),
  number: PropTypes.number,
}

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

const ProjectSection = (props) => {
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
            />
        )})}
      </div>
    </Section>
  )
}

export default ProjectSection