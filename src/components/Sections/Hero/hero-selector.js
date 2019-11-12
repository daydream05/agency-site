import React from 'react'

import Hero from './index'
import BottomMediaHero from './bottom-media-hero'

import heroProptypes from './hero-prop-types'

const HeroSelector = (props) => {
  const { mainText, subText, media, type, buttonText, videoUrl } = props;
  const showHero = (type) => {
    switch (type) {
      case 'default': {
        return (
          <Hero
            mainText={mainText}
            subText={subText}
            media={media}
            buttonText={buttonText}
            videoUrl={videoUrl}
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
            videoUrl={videoUrl}
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
