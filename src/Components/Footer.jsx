import React from 'react'
import PropTypes from 'prop-types';
// import '../css/style.css';

const Footer = (footerProps) => {
    return (
        <div className="footer">
            {/* <h3>more news..</h3> */}
            <p>{footerProps.myFooter}</p>
        </div >
    )
}

// provide default value for props
Footer.defaultProps = {
    myFooter: `more news..`
};

// check data type
Footer.propTypes = {
    myFooter: PropTypes.string
}

export default Footer