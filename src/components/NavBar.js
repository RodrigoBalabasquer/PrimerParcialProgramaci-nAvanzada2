import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import PropTypes from 'prop-types';
//import {Context} from '../Context';

export default function NavBar(props){
    const {expand,children} = props;

    return(
        <Navbar collapseOnSelect expand={expand} bg="dark" variant="dark">
            <Navbar.Brand href="#home">Primer Parcial</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {children}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

NavBar.defaultProps = {
    bg: 'dark',
    variant: 'dark',
    expand: 'lg',
}
// NavBar.propTypes = {
//     bg: PropTypes.oneOf('dark','light'),
// }