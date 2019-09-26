import React from 'react'

import Hero from './index'
import BottomMediaHero from './bottom-media-hero'

import heroProptypes from './hero-prop-types'

const HeroSelector = (props) => {
  const { mainText, subText, media, type, buttonText } = props;
  console.log('not here', buttonText)
  const showHero = (type) => {
    switch (type) {
      case 'default': {
        return (
          <Hero
            mainText={mainText}
            subText={subText}
            media={media}
            buttonText={buttonText}
          />
        )
      }
      case "bottom media": {
        return (
          <BottomMediaHero
            mainText={mainText}
            subText={subText}
            media={media}
            buttonText={buttonText}
          />
        )
      }
      default:
        return (
          <Hero
            mainText={mainText}
            subText={subText}
            media={media}
            buttonText={buttonText}
          />
        )
    }
  };
  return (<>
    {showHero(type)}
  </>);
}

export default HeroSelector

HeroSelector.propTypes = heroProptypes
