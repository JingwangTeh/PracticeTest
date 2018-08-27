import { combineReducers } from 'redux';



// Reducers
import { mainTestReducer } from './test';



const rootReducer = combineReducers({
    mainTestReducer,
});



export default rootReducer;