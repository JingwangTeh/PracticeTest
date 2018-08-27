import _ from 'lodash';

export const mainUtilityFunctions = {
	appendComp,
};

function appendComp() {
	document.body.appendChild(component());
}

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.className = 'abc';
	
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	
	element.appendChild(btn);

    return element;
}

function printMe() {
  console.log('Updating print.js1...');
}