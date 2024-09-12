"use strict";

const text = "Hola, TypeScript",
  number = 123,
  boolean = true,
  date = new Date();

const typeDataSection = document.querySelector(".type-data ul");
typeDataSection.innerHTML = `
   <li>Texto: ${text} </li>
   <li>Número: ${number} </li>
   <li>Booleano: ${boolean.valueOf()}</li>
   <li>Fecha: ${date.getDate()}</li>
`;

const convertNumberToString = (name) => name.toString();
const convertNumberParagrap = document.querySelector(".convert-number p");
convertNumberParagrap.textContent += convertNumberToString(456);

const sumElementsArray = (list) =>
  list.reduce((acum, currentValue) => acum + currentValue);

const sumElementsParagrap = document.querySelector(".sum-elements p");
sumElementsParagrap.textContent = `Suma de Array: ${sumElementsArray([
  20, 50, 100, 254,
])}`;

const student = {
  name: "Juan",
  age: 20,
  course: "Matematicas",
};

const studentUL = document.querySelector(".obj-student ul");
studentUL.innerHTML = `
   <li>Estudiante: ${student.name} </li>
   <li>Edad: ${student.age} </li>
   <li>Curso: ${student.course} </li>
`;

const addressUser = {
  street: "Av Principal",
  city: "Ciudad",
  code: 1234,
};

const addressParagrap = document.querySelector(".address p");
addressParagrap.textContent = `Calle: ${addressUser.street}, Ciudad: ${addressUser.city}, CP: ${addressUser.code}`;

const usuario = {
  nombre: "Ana",
  correo: "ana@example.com",
  saludar() {
    return `Hola, mi nombre es ${this.nombre}.`;
  },
};

const userParagrap = document.querySelector(".user-info p");
userParagrap.textContent = usuario.saludar();

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  presentarse() {
    return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
  }
}

const persona = new Persona("Ana García", 30);
const userInfo2 = document.querySelector(".user-info-2 p");
userInfo2.textContent = persona.presentarse();

("use strict");
class Caja {
  constructor(valor) {
    this.valor = valor;
  }
  getValue() {
    return this.valor;
  }
}
const cajaNumero = new Caja(42);
const cajaTexto = new Caja("Hola Mundo");

const genericParagraph = document.querySelector(".generica p");
genericParagraph.innerHTML = `Contenido CajaNumero: ${cajaNumero.getValue()}, Tipo: ${typeof cajaNumero.getValue()}<br>`;
genericParagraph.innerHTML += `Contenido CajaTexto: ${cajaTexto.getValue()}, Tipo: ${typeof cajaTexto.getValue()}`;

function identidad(valor) {
  return valor;
}
const numero = identidad(123);
const texto = identidad("Hola Mundo");

const functionParagraph = document.querySelector(".funcion p");
functionParagraph.innerHTML = `Identidad del número: ${numero}<br>Identidad del texto: ${texto}`;

var Color;
(function (Color) {
  Color["Rojo"] = "Rojo";
  Color["Verde"] = "Verde";
  Color["Azul"] = "Azul";
})(Color || (Color = {}));

const colorFavorito = Color.Rojo;
const enumParagraph = document.querySelector(".enum");
enumParagraph.innerHTML += `Color Favorito: ${colorFavorito}`;
