import React from 'react'
import PropTypes from 'prop-types';

const Footer = (footerProps) => {
    return (
        <div className="footer">
            <p>{footerProps.myFooter}</p>
            <p>{footerProps.myself}</p>
        </div >
    )
}

// provide default value for props
Footer.defaultProps = {
    myFooter: `More news..`,
    myself: `by Hin`
};

// check data type
Footer.propTypes = {
    myFooter: PropTypes.string
}

export default Footer