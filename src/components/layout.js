/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import theme from '../utils/theme'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
