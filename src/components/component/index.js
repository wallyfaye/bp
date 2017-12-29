import _ from 'lodash';
import './style.scss';
import Logo from './logo.png';

export const component = function(str_arr = ['Hello', 'world']){
	var element = document.createElement('div');

    element.innerHTML = _.join(str_arr, ' ');
    element.classList.add('hello');

    var logo = new Image();
    logo.src = Logo;

	element.appendChild(logo);

	return element;
}