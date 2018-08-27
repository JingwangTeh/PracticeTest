/*
 * Modules
 */

// ...



/*
 * Constants & Services
 */

import { mainTestConstants } from '../../../_constants';
import { mainTestServices } from '../../../_services';



export const mainTestActions = {
    addTodo
}



function addTodo(text) {
    return dispatch => {
        // dispatch(request());
        
        mainTestServices.test()
            .then(
                details => {
                    // toastr.success("Sucess", "Successfully add to cart");
                    // dispatch(success());
                    dispatch(test(details));
                },
                error => {
                    dispatch(test('Failed'));
                    // if (error.status == 500) {
                    //     dispatch(failure("Internal Server Error. Please try again later."));
                    // } else {
                    //     dispatch(failure(error.responseJSON.warning));
                    // }
                }
            )
    };
    
    function test(details) { return { type: mainTestConstants.ADD_TODO, details } };
}