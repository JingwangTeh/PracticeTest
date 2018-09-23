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
    test
}



function test(text) {
    return dispatch => {
        // dispatch(request());
        mainTestServices.test()
            .then(
                details => {
                    dispatch(test(details));
                    // dispatch(success());
                    // toastr.success("Sucess", "Successfully...");
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
    
    function test(details) { return { type: mainTestConstants.TEST, details } };
}