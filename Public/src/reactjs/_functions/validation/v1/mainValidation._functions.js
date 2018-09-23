export const func_validation = {
	isNotNull,
	isNotUndefined,
	isNotNullUndefined,

	isStringValid,
	isStringNotEmpty,
	isStringTrimNotEmpty,

	isNumberValid,
	isNumberWithinRange,
	getNumberAfterRangeValidation,
	getIntAfterValidation,
	getFloatAfterValidation,

	isArray,
	isArrayNotEmpty,
	isArrayEmpty,

	isObject,
    isObjectNotEmpty,
	hasObjectProperty,
	getObjectPropertyValue,

    isJsonString,
};

// Null | Undefined
function isNotNull(val) {
	return (val !== null);
}
function isNotUndefined(val) {
	return (typeof val !== 'undefined');
}
function isNotNullUndefined(val) {
	return (isNotNull(val) && isNotUndefined(val));
}

// String
function isStringValid(val) {
	return (isNotNullUndefined(val));
}
function isStringNotEmpty(val) {
	return (isStringValid(val) && val !== '');
}
function isStringTrimNotEmpty(val) {
    return (isStringNotEmpty(val) && val.toString().trim() !== '');
}

// Number 
// (NOTE: parseInt 1a = true, parseInt a1 = false)
function isNumberValid(val) {
	// if +val contains non-numeric, it becomes NaN
	return (isNotNullUndefined(val) && 
			(!( isNaN(val) && isNaN(parseInt(+val)) )));
}
// Check is within range (both inclusive)
function isNumberWithinRange(val, { min, max, equal }) {
	if (isNumberValid(val)) {
		if (isNumberValid(equal)) return (val == equal);
		else if (isNumberValid(min) && isNumberValid(max)) return (val >= min && val <= max);
		else if (isNumberValid(min)) return (val >= min);
		else if (isNumberValid(max)) return (val <= max);
	}
	return false;
}
function getNumberAfterRangeValidation(val, defaultVal, { min, max, equal }) {
	if (isNumberWithinRange(val, { min, max, equal })) return parseFloat(val);
	if (isNotNullUndefined(defaultVal)) return defaultVal;
	return undefined;
}
function getIntAfterValidation(val, defaultVal) {
	if (isNumberValid(val)) return parseInt(val);
	if (isNotNullUndefined(defaultVal)) return defaultVal;
	return undefined;
}
function getFloatAfterValidation(val, defaultVal) {
	if (isNumberValid(val)) return parseFloat(val);
	if (isNotNullUndefined(defaultVal)) return defaultVal;
	return undefined;
}

// Array
function isArray(val) {
	return (isNotNullUndefined(val) && Array.isArray(val));
}
function isArrayNotEmpty(val) {
	return (isArray(val) && val.length > 0);
}
function isArrayEmpty(val) {
	return (isArray(val) && val.length === 0);
}

// Object
function isObject(obj) {
	return (typeof obj === 'object');
}
function isObjectNotEmpty(obj) {
	return (isObject(obj) && Object.keys(obj).length > 0);
}
function hasObjectProperty(obj, propName) {
	// Not checking with .hasOwnProperty due to objects not always having a prototype chain
	return (isObjectNotEmpty(obj) && isNotNullUndefined(propName) && 
			isStringTrimNotEmpty(obj[propName]));
}
function getObjectPropertyValue(obj, propName, defaultVal) {
	if (hasObjectProperty(obj, propName)) return obj[propName];
	if (isNotNullUndefined(defaultVal)) return defaultVal;
	return undefined;
}

// JSON
function isJsonString(json) {
    try { JSON.parse(json.toString()); }
    catch (e) { return false; }
    return true;
}


// Regex replace, regex test on string
// function isNumberDigit(val) {
// 	return (true);
// }
