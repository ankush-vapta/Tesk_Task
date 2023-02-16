import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import movieReducer from './reducer';
// import userReducer from './crudReducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    movieReducer
});


export const store = createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk))
);