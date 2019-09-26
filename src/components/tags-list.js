import React from 'react'
import { css } from 'theme-ui'

const TagsList = (props) => {
  const { tags } = props
  
  return (
      <ul
        css={css({
          display: `inline`,
          textDecoration: `none`,
          mx: `0`,
        })}
        className={props.className}
      >
        {tags &&
          tags.map((tag, i) => {
            const isLast = tags.length === i + 1
            return (
              <li
                key={tag.id}
                css={css({
                  display: `inline`
                })}
              >
                {tag.name}
                {!isLast ? `, ` : null}
              </li>
            )
          })}
      </ul>
  )
}

export default TagsList