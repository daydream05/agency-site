import React from 'react'
import { css } from 'theme-ui'
import { maxWidth } from '../utils/tokens'

const Container = (props) => {
  return (
    <div
      css={css({
        maxWidth: maxWidth.xxl,
        margin: `auto`,
      })}
      className={props.className}
      {...props}
    >
      {props.children}
    </div>
  )
}

export default Container