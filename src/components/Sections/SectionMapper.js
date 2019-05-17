import React from 'react'
import PropTypes from 'prop-types'
import Hero from './Hero';
import ProjectSection from './ProjectSection'
import ProcessSection from './ProccessSection'

const SectionMapper = ({ sections }) => {
  console.log(sections)

  const section = sections.map((section, index) => {
    switch(section.__typename) {
      case 'ContentfulHero':
        return (
          <Hero
            key={section}
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
          />
        )
      case 'ContentfulProcessSection':
          return (
            <ProcessSection
              processList={section.processes}
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