import { appReducer } from './reducers';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    appReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;