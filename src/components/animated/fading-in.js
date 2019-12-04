import React, { useState, useEffect } from 'react'
import { useSpring, a, config } from 'react-spring'

const FadingInText = ({ children, delay, className }) => {
  const [toggle, set] = useState(false)

  useEffect(() => {
    set(true)
  }, [])

  const animation = useSpring({
    config: config.molasses,
    opacity: toggle ? 1 : 0,
    delay: delay || 0,
    from: { opacity: 0 },
  })

  return (
    <a.div style={animation} className={className}>
      {children}
    </a.div>
  )
}

export default FadingInText