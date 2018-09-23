import queryString from 'query-string';
import Cookies from 'universal-cookie';

import { func_validation } from '../../';
import { mainUrlConstants } from '../../../_constants';

const cookies = new Cookies();
// const cookie_user = cookies.get('user')? cookies.get('user'):{};



export const func_navigation = {

    historyPushToURL,
	directToMainDomain,
	
	getQueryStringFromURL,
    combineUrlAndQueryString,
	setFormatQueryString,
	
};

function historyPushToURL(props, url) {
    const { history } = props;
    if (func_validation.isNotNullUndefined(history) && 
        func_validation.isNotNullUndefined(url)) {
        history.push(url);
    }
}

function directToMainDomain() {
    window.location.href = mainUrlConstants.MAIN_DOMAIN;
}

function getQueryStringFromURL(props) {
    const { location } = props;
    if (typeof location !== 'undefined' && 
        typeof location.search !== 'undefined') {
        // NOTE: queryString.parse does not add _proto_ 
        // (e.g. object.hasOwnProperty would not work)
        return queryString.parse(location.search);
    }
    return {};
}

function combineUrlAndQueryString(baseUrl, queryStringArray) {
    if (func_validation.isArrayNotEmpty(queryStringArray)) {
        let url = (func_validation.isNotNullUndefined(baseUrl))?baseUrl:'';
        url = url + queryStringArray.reduce((acc, cur)=>{ return acc+'&'+cur });
        return url;
    }
    return '';
}

function setFormatQueryString(property, value, isJSON) {
    if (func_validation.isNotNullUndefined(property) && func_validation.isNotNullUndefined(value)) {
        if (func_validation.isNotNullUndefined(isJSON) && isJSON) {
            return property+'='+(encodeURIComponent( JSON.stringify(value) ));
        }
        return property+'='+(encodeURIComponent(value));
    }
    return undefined;
}
