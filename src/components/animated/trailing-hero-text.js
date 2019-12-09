import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useTrail, a } from 'react-spring'

import { fontSizes, mediaQueries } from '../../utils/tokens'

const config = { mass: 5, tension: 1250, friction: 200 }

const textStyle = {
  position: `relative`,
  width: `100%`,
  height: `calc(${fontSizes[5]} + ${fontSizes[2]})`,
  lineHeight: 0.8,
  willChange: `transform, opacity`,
  overflow: `hidden`,
  [mediaQueries.lg]: {
    height: fontSizes[6],
  },
}

const TrailingHeroText = (props) => {
  const { text } = props

  const textList = text.split(" ")

  const [showText, setShowText] = useState(false)

  useEffect(() => {
    setShowText(true)
  }, [])

  const trail = useTrail(textList.length, {
    config,
    opacity: showText ? 1 : 0,
    x: showText ? 20 : 0,
    height: showText ? 84 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 600,
  })

  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => {
        return (
          <a.div
            key={index}
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
              ...textStyle,
            }}
          >
            <a.span
              style={{ height, overflow: `hidden`, display: `block` }}
            >{`${textList[index]} `}</a.span>
          </a.div>
        )
      })}
    </>
  )
}

export default TrailingHeroText

TrailingHeroText.propTypes = {
  text: PropTypes.string.isRequired,
}