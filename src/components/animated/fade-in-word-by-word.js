import React from 'react'
import { a, useTrail } from 'react-spring'

const config = { mass: 5, tension: 1250, friction: 100 }

const FadeInWordByWord = ({ text, configs, toggle }) => {

  const textList = text.split(" ")

  const trail = useTrail(textList.length, {
    config,
    opacity: toggle ? 1: 0,
    from: { opacity: 0 },
    ...configs,
  })

  return (
    <>
      {trail.map((prop, index) => {
        return (
          <a.span
            key={index}
            style={prop}
          >{`${textList[index]} `}</a.span>
        )
      })}
    </>
  )
}

export default FadeInWordByWord