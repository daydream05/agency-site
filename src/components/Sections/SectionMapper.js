import React from 'react'
import Hero from './Hero';
import ProjectSection from './ProjectSection'
import ProcessSection from './ProcessSection'

const SectionMapper = ({ sections }) => {
  console.log(sections)

  const section = sections.map((section, index) => {
    switch(section.__typename) {
      case 'ContentfulHero':
        return (
          <Hero
            mainText={section.mainTagline}
            subText={section.secondaryTagline}
            media={section.media}
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