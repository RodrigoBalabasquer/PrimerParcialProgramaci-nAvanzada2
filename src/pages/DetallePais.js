import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {Card} from '../organisms';

export default function DetallePais(props){
    const { appReducer } = useSelector(state => state);
    const { pais } = appReducer;

    return (
        
        <div>
            <h1>
                Detalles del pais {pais.name}:
            </h1>
            <Card {...pais}></Card>
        </div>
    )
}