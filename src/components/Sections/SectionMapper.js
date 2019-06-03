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

const SectionMapper = ({ sections }) => {
  const section = sections.map((section, index) => {
    switch(section.__typename) {
      case 'ContentfulHero':
        return (
          <HeroSelector
            mainText={section.mainTagline}
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
            type={section.type}
            key={index}
          />
        )
      case 'ContentfulProcessSection':
          return (
            <ProcessSection
              processList={section.processes}
              key={index}
            />
          )
      case 'ContentfulClientSection':
        return (
          <ClientSection
            mainText={section.tagline}
            subText={section.description.internal.content}
            clientLogos={section.clientLogos}
            key={index}
          />
        )
      case 'ContentfulContactSection':
        return (
          <ContactSection
            mainText={section.tagline}
            backgroundImage={section.backgroundImage}
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