import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { appActions } from '../redux/actions';
import { Msg } from '../components';
import { PaisesLista } from '../templates';

export default function Lista(props){
    const { appReducer } = useSelector(state => state);
    const dispatch = useDispatch();
    const { lista } = appReducer;
    const { region, ruta } = props;

    React.useEffect(() => {
        dispatch(appActions.setLista([]));
        dispatch(appActions.getLista(ruta));
    },[]);

    return (
        
        <div>
            <h1>
                Lista de paises de {region}:
            </h1>
            <Msg/>
            <PaisesLista paises={lista}/>
        </div>
    )
}