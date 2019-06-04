/***
 * This is the brain behind the dynamic sections.
 * The `...on ContentfulModelName` query helps us
 * get the attributes for each specific model. We
 * then use the `.__typename` attribute to figure
 * out which component to use.
 * 
 * Some of these sections are as is, while some
 * have a `type` property so you can choose a different
 * version of the same section.
 * 
 * i.e. Hero section can be one big background image or it
 * can just be text
 */

import React from 'react'
import HeroSelector from "./Hero/hero-selector";
import ProjectSectionSelector from './ProjectSection/project-section-selector'
import ProcessSection from './ProcessSection'
import ClientSection from './ClientSection'
import ContactSection from './ContactSection'
import { TwoColumnTextSection } from './TextSection'
import { ThreeColumnTestimonial } from './TestimonialSection'

const SectionMapper = ({ sections }) => {
  const hasOnlyOne = sections.length === 1
  const section = sections.map((section, index) => {
    switch(section.__typename) {
      case 'ContentfulHero':
        return (
          <HeroSelector
            mainText={section.mainTagline}
            makeMainTextH1={hasOnlyOne}
            subText={section.secondaryTagline}
            media={section.media}
            type={section.type}
            key={index}
          />
        )
      case 'ContentfulProjectSection':
        return (
          <ProjectSectionSelector
            projectList={section.projects}
            makeMainTextH1={hasOnlyOne}
            type={section.type}
            key={index}
          />
        )
      case 'ContentfulProcessSection':
          return (
            <ProcessSection
              processList={section.processes}
              makeMainTextH1={hasOnlyOne}
              key={index}
            />
          )
      case 'ContentfulClientSection':
        return (
          <ClientSection
            mainText={section.tagline}
            makeMainTextH1={hasOnlyOne}
            subText={section.description.internal.content}
            clientLogos={section.clientLogos}
            key={index}
          />
        )
      case 'ContentfulContactSection':
        return (
          <ContactSection
            mainText={section.tagline}
            makeMainTextH1={hasOnlyOne}
            backgroundImage={section.backgroundImage}
            key={index}
          />
        )
      case 'ContentfulTextSection':
        return (
          <TwoColumnTextSection
            mainText={section.tagline}
            title={section.title}
            body={section.body.childMarkdownRemark.html}
            key={index}
          />
        )
      case 'ContentfulTestimonialSection':
        const testimonials = section.testimonials.map((testimonial) => {
          return {
            ...testimonial,
            message: testimonial.message.internal.content,
          }
        })

        console.log(testimonials)
        return (
          <ThreeColumnTestimonial
            testimonials={testimonials}
            key={index}
          />
        )
      default:
        return null
    }
  })

  return (
    <div>
      {section}
    </div>
  )
}

export default SectionMapper