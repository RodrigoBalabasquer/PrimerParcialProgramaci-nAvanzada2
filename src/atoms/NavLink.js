import React from 'react';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function NavLink(props){
    const { label, href} = props;

    return (
        <Nav.Link as={Link} to={href}>  
            {label}
        </Nav.Link>
    )
}

NavLink.defaultProps = {
    href: '#',
}
NavLink.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
}