import React from 'react';
import {Bandera } from '../atoms';
import PropTypes from 'prop-types';

export default function Card(props){
 
    const {capital,region,subregion,population,flag} = props;
    return(
        <div>
            <ul className="list-group">
            <li className="list-group-item">Capital: {capital}</li>
            <li className="list-group-item">Region: {region}</li>
            <li className="list-group-item">Sub-Region: {subregion}</li>
            <li className="list-group-item">Población: {population}</li>
            </ul>
            <Bandera src={flag}/>
            <div></div>
            <div></div>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired
}