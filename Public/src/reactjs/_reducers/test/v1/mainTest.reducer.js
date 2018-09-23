/*
 * Constants
 */

import { mainTestConstants } from '../../../_constants';



/*
 * Functions
 */

// ...



export function mainTestReducer(state = {}, action) {
    switch (action.type) {

        // TODO
        case mainTestConstants.TEST:
            return { ...state, test:action.details };



        // DEFAULT
        default:
            return state;
    }
}