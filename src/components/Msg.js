import React from 'react';
import { useSelector } from 'react-redux';

export default function Msg (){

    const { appReducer } = useSelector(state => state);

    const { loading, error, errorMsg } = appReducer;

    if(loading){
        return "Cargando..."
    }
    if(error){
        return <h2 style={{color:'red'}}>Error {errorMsg}</h2>
    } 

    return null;
}
