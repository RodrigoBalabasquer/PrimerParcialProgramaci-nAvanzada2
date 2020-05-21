import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Menu } from '../components';
import PropTypes from 'prop-types';
import Router from './Router';

export default function Home(props){
    
    return(
        <Container fluid={true}>
            <Row>
                <Col sm={12}><Menu/></Col>
            </Row>
            <Row>
                <Col sm={2}></Col>
                <Col sm={8}><Router/></Col>
                <Col sm={2}></Col>
            </Row>
        </Container>
    )
}