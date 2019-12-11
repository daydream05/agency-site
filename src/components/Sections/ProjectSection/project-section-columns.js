import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useTrail, a, config } from 'react-spring'
import { Waypoint } from "react-waypoint"
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
  const { name, client, tags, media, number, url, coverStyle, numberStyle, titleStyle } = props

  return (
    <ProjectCardRoot>
      <div
        css={css`
          position: relative;
          width: 100%;
          overflow: hidden;
        `}
      >
        <a.div
          style={{
            position: `absolute`,
            width: `100%`,
            height: `100%`,
            backgroundColor: colors.grey.light,
            zIndex: 1,
            ...coverStyle,
          }}
        />
        {media ? (
          <Img
            fluid={media.fluid}
            alt={media.title}
            css={css`
              flex: 1;
              min-height: 450px;
              max-height: 450px;
            `}
          />
        ) : (
          <div
            css={css`
              min-height: 450px;
              max-height: 450px;
              background-color: ${colors.grey.reallyDark};
            `}
          />
        )}
        <a.div
          style={{
            ...numberStyle,
          }}
        >
          <div
            css={css`
              position: absolute;
              bottom: 0;
              right: 0;
              height: ${tokenSpace[5]}px;
              width: ${tokenSpace[5]}px;
              background-color: ${colors.grey.light};
              display: flex;
              justify-content: center;
              align-items: center;
              z-index: 2;
            `}
          >
            <span
              css={css`
                font-weight: bold;
                font-size: calc(${fontSizes[0]} - 2px);
                letter-spacing: ${letterSpacings.mega};
              `}
            >
              0{number}
            </span>
          </div>
        </a.div>
      </div>
      <div>
        <a.div style={{
          willChange: `transform, opacity`,
          ...titleStyle
        }}>
          <CardTitle mt={4}>{name}</CardTitle>
        </a.div>
        <div>{client && <span>Client: {client}</span>}</div>
        <div>
          {tags &&
            tags.map((tag, i) => {
              const isLast = tags.length === i + 1
              return (
                <span key={tag.id}>
                  {tag.name}
                  {!isLast ? `, ` : null}
                </span>
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

  const [animate, setAnimate] = useState(false)

  const trail = useTrail(projectList.length, {
    config: config.slow,
    width: animate ? tokenSpace[5] : 1000,
    height: animate ? tokenSpace[5] : 1000,
    opacity: animate ? 1 : 0,
    bottom: animate ? 0 : `unset`,
    right: animate ? 0 : `unset`,
    y: animate ? 0 : 100,
    from: { width: 1000, height: 1000, opacity: 0, y: 100 },
  })

  return (
    <Section
      py={{
        xs: 5,
        xl: 7,
      }}
      px={{
        xs: 4,
      }}
      bg="grey.light"
    >
      <Waypoint onEnter={() => setAnimate(true)} bottomOffset="25%" />
      <div
        css={css`
          display: grid;
          grid-gap: ${tokenSpace[5]}px;
          ${mediaQueries.xl} {
            grid-gap: ${tokenSpace[4]}px;
            grid-template-columns: repeat(3, 1fr);
            max-width: ${maxWidth.xl};
            margin: auto;
          }
        `}
      >
        {trail.map(({ width, y, height, opacity, ...rest }, index) => {
          const project = projectList[index]
          return (
            <ProjectCard
              key={project.id}
              name={project.name}
              client={project.client}
              tags={project.tags}
              number={index + 1}
              media={project.coverPhoto}
              url={project.fields.path}
              coverStyle={{
                width: width.interpolate(w => `${w}px`),
                height: height.interpolate(h => `${h}px`),
                ...rest,
              }}
              numberStyle={{
                opacity: opacity,
              }}
              titleStyle={{
                opacity: opacity,
                transform: y.interpolate(y => `translate3d(0,-${y}%,0)`),
              }}
            />
          )
        })}
      </div>
    </Section>
  )
}

ProjectSectionColumns.propTypes = projectSectionPropTypes

export default ProjectSectionColumns