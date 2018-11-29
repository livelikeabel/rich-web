import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title, handleBackwordPage}) => {
  return <div>{title}</div>
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleBackwordPage: PropTypes.func
}

export default Header
