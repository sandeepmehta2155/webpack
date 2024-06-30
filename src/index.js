import _ from "lodash";
import Icon from './icon.jpeg';
import './style.css';

function helloWorld() {
    const divElement = document.createElement('div');
    divElement.innerHTML = _.join(['Hello', 'webpack'], ' ');

    divElement.classList.add('hello');

      // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    divElement.appendChild(myIcon);

    document.body.appendChild(divElement);
}

helloWorld()