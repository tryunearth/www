import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/core'

import SEO from './SEO'
import Navbar from './Navbar'

const Layout = ({ title, theme, children }) => (
  <>
    <SEO title={title} />
    <Box>
      <Navbar theme={theme} />
      {children}
    </Box>
  </>
)

Layout.defaultProps = {
  theme: 'light',
  title: 'Managing, Organizing, and Searching Reddit Saves, Made Easy',
}

Layout.propTypes = {
  /** One of either 'light' or 'dark'. Controls the background and color of the navbar. */
  theme: PropTypes.string,
  /** Title of the currently-active page, prefixed by the separator 'Unearth - '. Used by `SEO.js`. */
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
