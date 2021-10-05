"use strict";

require("fslightbox");

fsLightboxInstances['first-lightbox'].open(0);

fsLightboxInstances['second-lightbox'].props.onOpen = function () {
  return console.log('Lightbox open!');
}; 
// import Swal from 'sweetalert2'
// Swal.fire({
//     title: 'FRIDA',
//     text: ':)',
//     imageUrl: 'https://i.pinimg.com/564x/0b/08/36/0b0836e00cd1aad3832dc6fbce734f44.jpg',
//     imageWidth: 400,
//     imageHeight: 200,
//     imageAlt: 'Custom image',
//   })
// import { suma,saludo } from './operaciones';
// document.write(`<h1>El resultado de la suma es: ${suma(2,3)} </h1>`);
// console.log(suma(2,3));
// console.log(saludo);
// import _ from 'lodash';
// function component() {
//     const element = document.createElement('div');
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//     return element;
//   }
//   document.body.appendChild(component());