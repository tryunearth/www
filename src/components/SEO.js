import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const SEO = ({ title }) => (
  <Helmet>
    <title>
      {title.toLowerCase() === 'unearth' ? title : `Unearth - ${title}`}
    </title>
  </Helmet>
)

SEO.defaultProps = { title: 'Unearth' }
SEO.propTypes = {
  /** Title of the currently-active page, prefixed by the separator 'Unearth - ' */
  title: PropTypes.string,
}

export default SEO
