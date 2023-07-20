import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom';

const Header = (headerProps) => {
    return (
        <div className="header">
            <h1>{headerProps.myTitle}</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

// provide default value for props
Header.defaultProps = {
    myTitle: `guardian news`,
};

// check data type
Header.propTypes = {
    myTitle: PropTypes.string,
}

export default Header