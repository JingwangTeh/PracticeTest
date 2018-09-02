/*
 * Modules
 */

// import Cookies from 'universal-cookie';


/*
 * Constants
 */

import { mainUrlConstants as const_url } from "../../../_constants";



/*
 * Variables
 */

// const cookies = new Cookies();
// var tokenCookie= cookies.get(alpphyConstants.token_Name);



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

// function test() {
//     return $.ajax({
//         type: "GET",
//         url: const_url.URL_TEST,
//         contentType: "application/json;charset=utf-8",
//     });
// }
