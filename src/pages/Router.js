import React from 'react';
import {
    Switch,Route
} from 'react-router-dom';
import Lista from './Lista';
import DetallePais from './DetallePais';

export default function Router(props){
    return(
        <Switch>
            <Route path="/america">
                <Lista region="America" ruta="americas"/> 
            </Route>
            <Route path="/europa">
               <Lista region="Europa" ruta="europe"/> 
            </Route>
            <Route path="/africa">
               <Lista region="Africa" ruta="africa"/> 
            </Route>
            <Route path="/detalle">
               <DetallePais/> 
            </Route>
            <Route exact path="">
                <Lista region="America" ruta="americas"/> 
            </Route>
            
        </Switch>
    )
}