import React from 'react'
import HeroSelector from "./Hero/hero-selector";
import ProjectSection from './ProjectSection'
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
          <ProjectSection
            projectList={section.projects}
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