import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { space, backgroundColor } from 'styled-system'

import { mediaQueries, maxWidth, space as tokenSpace } from '../../../utils/tokens' 

const ProjectCardRoot = styled.section`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.h2`
  ${space};
`
const ProjectCard = (props) => {
  const { name, client, tags, media } = props
  console.log(space)

  return (
    <ProjectCardRoot>
      <Img
        fluid={media.fluid}
        css={css`
          flex: 1;
          min-height: 450px;
          max-height: 450px;
        `}
      />
      <div>
        <CardTitle mt={4}>{name}</CardTitle>
        <div>
          <span>Client: {client}</span>
        </div>
        <div>
          {tags.map((tag, i) => {
            const isLast = tags.length === i + 1
            return (
              <span
                key={tag.id}
              >{tag.name}{!isLast ? `, ` : null}</span>
            )
          })}
        </div>
      </div>
    </ProjectCardRoot>
  )
}

const Section = styled.section`
  ${space};
  ${backgroundColor};
`
const ProjectSection = (props) => {
  const { projectList } = props
  console.log(projectList)
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
              media={project.coverPhoto}
            />
        )})}
      </div>
    </Section>
  )
}

export default ProjectSection