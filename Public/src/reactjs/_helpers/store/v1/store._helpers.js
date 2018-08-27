/*
 * Modules
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'react-router-redux';



/*
 * Middleware
 */

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';



/*
 * Reducer
 */

import rootReducer from '../../../_reducers';
import { historyHelpers as history } from '../../';



/*
 * Middleware
 */

// Middleware for both Development and Production
let middleware = [thunkMiddleware, 
                  routerMiddleware(history)];

if (process.env.NODE_ENV !== 'production') {
    // Middleware for Development
    const loggerMiddleware = createLogger();
    //...    
    
    middleware = [...middleware, loggerMiddleware];
} else {
    // Middleware for Production
    //...

    middleware = [...middleware];
}



export const storeHelpers = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            ...middleware
        )
    )
);


