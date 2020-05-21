import { app } from '../types';
import { getList } from '../../utils/data';

export function getLista(ruta){
    return (dispatch,state) => {
        console.log(state);
        dispatch(set(true));

        setTimeout(() => {
            getList(ruta)
            .then(data => {
                dispatch(setLista(data));
                dispatch(set(false));
            })
            .catch(e => {
                dispatch(set(false,true,"Fetch ERROR"));
            })
        }, (3500));
    }
}

export function set(loading=false, error=false, errorMsg=''){
    return{
        type: app.SET,
        payload:{
            loading,
            error,
            errorMsg
        }
    }
}

export function setLista(lista){
    return{
        type: app.SetLista,
        payload: lista
    }
}

export function setPais(pais){
    return{
        type: app.SetPais,
        payload: pais
    }
}