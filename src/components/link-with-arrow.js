import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { css } from 'styled-components'

import { FaAngleRight } from 'react-icons/fa'

import { fontSizes,space as tokenSpace, colors, letterSpacings } from '../utils/tokens'

const LinkWithArrow = (props) => {
  const { to, text } = props
  return (
    <Link
      to={to}
      css={css`
          font-weight: bold;
          font-size: calc(${fontSizes[0]} - 2px);
          letter-spacing: ${letterSpacings.mega};
          text-transform: uppercase;
          display: flex;
          align-items: center;
          margin-top: ${tokenSpace[5]}px;
        `}
    >
      <span css={css`
        margin-right: ${tokenSpace[3]}px;
      `}>{text}</span>
      <FaAngleRight
        css={css`
          font-size: ${fontSizes[2]};
          color: ${colors.accent};
        `}
      />
    </Link>
  )
}

LinkWithArrow.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string,
}

LinkWithArrow.defaultProps = {
  text: 'Discover',
}

export default LinkWithArrow