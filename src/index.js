import _ from "lodash";
import './style.css';
// import printMe from "./print";

function helloWorld() {
    const divElement = document.createElement('div');
    const btn = document.createElement('button');

    divElement.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';

    // btn.onclick = printMe;

    divElement.classList.add('hello');

    // divElement.appendChild(btn);

    document.body.appendChild(divElement);
}

helloWorld()