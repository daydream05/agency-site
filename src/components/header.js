import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from 'styled-components'

import { headerHeight, maxWidth, space, mediaQueries } from '../utils/tokens'

const Header = ({ siteTitle }) => (
  <header
    css={css`
      display: flex;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: ${headerHeight};
      width: 100%;

      max-width: ${maxWidth.xl};
      margin: auto;
      
    `}
  >
    <div
      css={css`
        padding: 0 ${space[4]}px;

        ${mediaQueries.xl} {
          padding: 0;
        }
      `}
    >
      <span style={{ margin: 0 }}>
        <Link
          to="/"
          css={css`
            font-weight: bold;
          `}
        >
          Agency
        </Link>
      </span>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
