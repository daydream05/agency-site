import React from 'react'
import FeatureAlternatingRows from './feature-alternating-rows'

const FeatureSectionSelector = (props) => {
  const { featuresList, type } = props
  console.log(featuresList)

  const showSection = (type) => {
    switch(type) {
      case 'alternating rows': {
        return <FeatureAlternatingRows featuresList={featuresList} />
      }
      default:
        return <FeatureAlternatingRows featuresList={featuresList} />
    }
  }

  return showSection(type)
}

export default FeatureSectionSelector