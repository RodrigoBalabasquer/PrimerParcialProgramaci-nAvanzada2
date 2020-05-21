import { app } from '../types';
const defaultState = {
    lista: [],
    pais: {},
    loading: false,
    error: false,
    errorMsg: ''
}

export default function appReducer (state = defaultState,action){
    const {type, payload } = action;

    switch (type){
        case app.SET:
            return{
                ...state,
                loading: payload.loading,
                error: payload.error,
                errorMsg: payload.errorMsg
            }
        case app.SetLista:
            return{
                ...state,
                lista: payload
            }
        case app.SetPais:
            return{
                ...state,
                pais: payload
            }
        default:
            return{
                ...state
            }
    }
}