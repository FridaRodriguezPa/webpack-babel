"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saludo = exports.suma = void 0;

// exportar la funcion
var suma = function suma(num, num2) {
  return num + num2;
};

exports.suma = suma;

var resta = function resta(num, num2) {
  return num - num2;
};

var multi = function multi(num, num2) {
  return num * num2;
};

var saludo = 'Hola, Soy Frida, Saludos desde un Módulo';
exports.saludo = saludo;