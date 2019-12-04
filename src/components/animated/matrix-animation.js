import React from 'react'
import { useSpring, a } from 'react-spring'

const config = { mass: 1, tension: 600, friction: 200 }

const MatrixAnimation = ({ children, toggle, delay, configs, className, style }) => {

  const animation = useSpring({
    config: config,
    opacity: toggle ? 1 : 0,
    transform: toggle ? `translate(0, 0) matrix(1, 0, 0, 1, 0, 0)` : `translate(0%, 125%) matrix(0.99756, 0.06975, -0.06975, 0.99756, 0, 0)`,
    delay: delay || 0,
    from: {
      opacity: 0,
      transform: `translate(0%, 125%) matrix(0.99756, 0.06975, -0.06975, 0.99756, 0, 0)`,
    },
    ...configs,
  })

  return (
    <a.div style={{
      ...style,
      ...animation,
    }}
      className={className}
    >{children}</a.div>
  )
}

export default MatrixAnimation