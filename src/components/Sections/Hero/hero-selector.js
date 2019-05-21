import React from 'react'

import Hero from './index'
import BottomMediaHero from './bottom-media-hero'

import heroProptypes from './hero-prop-types'

const HeroSelector = (props) => {
  const { mainText, subText, media, type } = props;
  const showHero = (type) => {
    switch (type) {
      case 'default': {
        return (<Hero mainText={mainText} subText={subText} media={media} />);
      }
      case "bottom media": {
        return (
          <BottomMediaHero
            mainText={mainText}
            subText={subText}
            media={media}
          />)
      }
      default:
        return (<Hero mainText={mainText} subText={subText} media={media} />);
    }
  };
  return (<>
    {showHero(type)}
  </>);
}

export default HeroSelector

HeroSelector.propTypes = heroProptypes
