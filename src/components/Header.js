import { Link, useStaticQuery, graphql } from "gatsby"
import { FaShoppingBag } from 'react-icons/fa'
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { css } from 'theme-ui'

import {
  headerHeight,
  fontSizes,
  maxWidth,
  space,
  mediaQueries,
  zIndex,
} from "../utils/tokens"

const MenuLink = styled(Link)`
  font-weight: bold;
  font-size: ${fontSizes[1]};
`

const Header = () => {
  const data = useStaticQuery(menuQuery)
  const { links } = data.contentfulMenu

  const filteredLinks = links.filter((link, i) => {
    return link.slug !== "home"
  })

  return (
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
        z-index: ${zIndex.header};

        max-width: ${maxWidth.xl};
        margin: auto;
      `}
    >
      <ul
        css={css`
          padding: 0 ${space[4]}px;
          display: flex;
          width: 100%;
          list-style: none;

          ${mediaQueries.xl} {
            padding: 0;
          }
        `}
      >
        <li
          css={css`
            flex: 1;
          `}
        >
          <Link
            to="/"
            css={css`
              font-weight: bold;
            `}
          >
            instinct pump.
          </Link>
        </li>
        {filteredLinks.map((link, index) => {
          return (
            <li
              key={index}
              css={css`
                margin-left: ${space[4]}px;
              `}
            >
              <MenuLink to={`/${link.slug}/`}>{link.title}</MenuLink>
            </li>
          )
        })}
        <li
          css={css({
            ml: 4,
            display: `flex`,
            alignItems: `center`,
          })}
        >
          <button
            className="snipcart-checkout"
            css={css({
              border: `none`,
              background: `unset`,
              cursor: `pointer`,
              position: `relative`,
            })}
          >
            <FaShoppingBag />
          </button>
        </li>
      </ul>
    </header>
  )
}

const menuQuery = graphql`
  query {
    contentfulMenu {
      links {
        slug
        title
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
