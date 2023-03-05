import React from 'react'
import PropTypes from 'prop-types'
// import '../css/style.css';

const Header = (headerProps) => {
    return (
        <div className="header">
            {/* <h1>news</h1> */}
            {/* <p>loading</p> */}
            <h1>{headerProps.myTitle}</h1>
            <p>{headerProps.myStatus}</p>
        </div>
    )
}

// provide default value for props
Header.defaultProps = {
    myTitle: `news`,
    myStatus: `loading`
};

// check data type
Header.propTypes = {
    myTitle: PropTypes.string,
    myStatus: PropTypes.string
}

export default Header