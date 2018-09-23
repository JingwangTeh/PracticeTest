/*
 * Modules
 */

// ...



/*
 * Constants
 */

import { mainUrlConstants as const_url } from "../../../_constants";



export const mainTestServices = {
    test,
};



function test() {
    return $.ajax({
        type: "GET",
        url: const_url.URL_TEST,
        contentType: "application/json;charset=utf-8",
        crossDomain: true,
    });
}
