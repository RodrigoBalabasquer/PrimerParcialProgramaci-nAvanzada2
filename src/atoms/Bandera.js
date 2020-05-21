import React from 'react';
import PropTypes from 'prop-types';

export default function Bandera(props){
    const { src, altName } = props;

    return(
        <img src={src} alt={altName} className="App-logo"/>
    )
}

Bandera.defaultProps = {
    altName: 'Foto'
}

Bandera.propTypes = {
    src: PropTypes.string.isRequired,
    altName: PropTypes.string
}