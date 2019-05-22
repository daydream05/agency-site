import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, { css } from 'styled-components'

import { headerHeight, fontSizes, maxWidth, space, mediaQueries, zIndex } from '../utils/tokens'

const MenuLink = styled(Link)`
  font-weight: bold;
  font-size: ${fontSizes[1]};
`

const Header = () => {
  const data = useStaticQuery(menuQuery)
  const { links } = data.contentfulMenu

  const filteredLinks = links.filter((link, i) => {
    return link.slug !== 'home'
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
      <div
        css={css`
          padding: 0 ${space[4]}px;
          display: flex;
          width: 100%;

          ${mediaQueries.xl} {
            padding: 0;
          }
        `}
      >
        <span css={css`
          flex: 1;
        `}>
          <Link
            to="/"
            css={css`
              font-weight: bold;
            `}
          >
            Agency
          </Link>
        </span>
        {filteredLinks.map((link, index) => {
          return (
            <span
              key={index}
              css={css`
                margin-left: ${space[4]}px;
              `}
            >
              <MenuLink to={`/${link.slug}/`}>
                {link.title}
              </MenuLink>
            </span>
          )
        })}
      </div>
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
