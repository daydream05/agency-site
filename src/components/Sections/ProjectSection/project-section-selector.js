import React from 'react'
import PropTypes from 'prop-types'

import { projectSectionPropTypes } from './prop-types'

import ProjectSectionColumns from './project-section-columns'
import ProjectSectionAlternatingRows from './project-section-alternating-rows'

const ProjectSectionSelector = (props) => {
  const { projectList, type } = props;

  const showSection = (type) => {
    switch (type) {
      case 'three columns': {
        return <ProjectSectionColumns projectList={projectList} />
      }
      case 'alternating rows': {
        return <ProjectSectionAlternatingRows projectList={projectList} />
      }
      default:
        return <ProjectSectionColumns projectList={projectList} />
    }
  };
  return (<>
    {showSection(type)}
  </>)
}

ProjectSectionSelector.propTypes = {
  projectSectionPropTypes,
  // add one of later
  type: PropTypes.string,
}

export default ProjectSectionSelector