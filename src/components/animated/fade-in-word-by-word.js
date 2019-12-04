import React from 'react'
import { a, useTransition } from 'react-spring'

const FadeInWordByWord = ({ items, configs, toggle }) => {

  const transitions = useTransition(toggle ? items : [], null, {
    trail: 1000 / items.length,
    from: { opacity: 0 },
    enter: { opacity: 1 },
  })

  return (
    <a.div>
      {transitions.map(({ item, key, props }) => {
          return (
            <a.span key={key} style={{ ...props }}>
              {item}
            </a.span>
          )
        })}
    </a.div>
  )
}

export default FadeInWordByWord