import { component } from './components/component/index.js';
import printMe from './print.js';

const component1 = new component();
const component2 = new component(['foo', 'bar']);

function component_print(){
	var element = document.createElement('div');
	var btn = document.createElement('button');
	element.innerHTML = 'Demo print comp';
	btn.innerHTML = 'click console';
	btn.onclick = printMe;
	element.appendChild(btn);
	return element;
}

document.body.appendChild(component1);
document.body.appendChild(component2);
document.body.appendChild(component_print());