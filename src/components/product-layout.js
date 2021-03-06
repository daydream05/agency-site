/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider, css } from "styled-components"
import theme from "../utils/theme"

import Header from "./Header"
import MobileMenu from "./mobile-menu"

const Layout = ({ children, darkMobileMenu }) => {
  return (
    <ThemeProvider theme={theme}>
      <div
        css={css`
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: ${theme.colors.white};
        `}
      >
        <Header />
        <MobileMenu dark={darkMobileMenu} />
        <main
          css={css`
            flex: 1;
          `}
        >
          {children}
        </main>
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
