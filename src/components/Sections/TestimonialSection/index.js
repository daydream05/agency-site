import React from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'

import { colors, space, lineHeights, fontSizes, mediaQueries, maxWidth } from '../../../utils/tokens'

import { Section } from '../../StyledComponents'

const CardRoot = styled.div`
  padding: ${space[5]}px;
  display: flex;
  flex-direction: column;
`

const Message = styled.p`
  line-height: ${lineHeights.loose};
  margin-bottom: ${space[5]}px;
`

const ReviewerContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: ${space[3]}px;
  align-items: center;
  flex: 1;
`
const TestimonialCard = (props) => {
  const { name, message, jobTitle, photo } = props
  
  return (
    <CardRoot>
      <Message>"{message}"</Message>
      <ReviewerContainer>
        {photo &&
          <Img
            fixed={photo.fixed} alt={photo.title}
            css={css`
              border-radius: 100%;
            `}
          />}
        <div css={css`
          display: flex;
          flex-direction: column;
        `}>
          <span css={css`
            font-weight: bold;
            font-size: ${fontSizes[1]};
          `}>{name}</span>
          <span css={css`
            font-size: ${fontSizes[1]};
            color: ${colors.grey.reallyDark};
          `}>{jobTitle}</span>
        </div>
      </ReviewerContainer>
    </CardRoot>
  )
}

export const ThreeColumnTestimonial = (props) => {
  const { testimonials } = props
  return (
    <Section
      css={css`
        padding: ${space[3]}px 0;
        ${mediaQueries.lg} {
          padding: ${space[6]}px 0;
        }
      `}
    >
      <h2 css={css`
        max-width: ${maxWidth.xl};
        margin-left: auto;
        margin-right: auto;
        font-size: ${fontSizes[4]};
        text-align: center;
        ${mediaQueries.lg} {
          margin-bottom: ${space[5]}px;
        }
      `}>What our clients say</h2>
      <ul css={css`
        list-style: none;
        margin: 0;
        ${mediaQueries.lg} {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          max-width: ${maxWidth.xl};
          margin: auto;
        }
      `}>
        {testimonials.map(testimonial => {
          return (
            <li
              key={testimonial.id}
              css={css`
                margin-bottom: 0;
                background-color: ${colors.white};

                :nth-child(even) {
                  background-color: ${colors.black};
                  color: ${colors.white};
                }
              `}
            >
              <TestimonialCard
                name={testimonial.name}
                message={testimonial.message}
                jobTitle={testimonial.jobTitle}
                photo={testimonial.photo}
              />
            </li>
          )
        })}
      </ul>
    </Section>
  )
}