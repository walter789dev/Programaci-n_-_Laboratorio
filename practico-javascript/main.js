import "./style.css";
// ---------- Introducción a JS -----------
let a = 5,
  b = 10,
  c = a + b;

console.log(`La suma de a y b es: ${c}`);

let username = prompt("¿Cúal es tu nombre?");
console.log(`Hola, ${username}!`);

// ------------- Operadores Logicos -----------
a = 10;
b = 5;
c = 14;
console.log(`El mayor de los tres números es: ${Math.max(a, b, c)}`);

let number = prompt("Ingresa un numero y te dire si es par o impar");

if (isNaN(number)) {
  console.log("El valor ingresado no es un número");
} else {
  let message = number % 2 == 0 ? "par" : "impar";
  console.log(`Èl número ${number}, es ${message}`);
}

// ------------------ Bucles ------------------
let d = 10;

while (d > 0) {
  console.log(d);
  d--;
}

let validate = true;
do {
  number = prompt("Ingresa un número mayor a 100: ");
  if (isNaN(number)) {
    console.log("El valor ingresado no es un número");
  } else {
    if (number > 100) {
      console.log(`Ingresaste un número mayor a 100: ${number}`);
      validate = false;
    }
  }
} while (validate);

// ------------ Funciones ------------
let number1 = 8,
  number2 = 7;

const esPar = (number) => number % 2 == 0;
console.log(`El número ${number1} es par: ${esPar(number1)}`);
console.log(`El número ${number2} es par: ${esPar(number2)}`);

let grado = 30;
const convertirCelciusAFahrenheit = (grado) => grado * 1.8 + 32;
console.log(
  `${grado}° son equivalentes a ${convertirCelciusAFahrenheit(grado)}°F`
);

// --------------- Objetos ---------------
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  setCuidad: function (ciudad) {
    this.ciudad = ciudad;
  },
  getInfo: function () {
    return `Persona: ${this.nombre}, Edad: ${this.edad}, Cuidad: ${this.ciudad}`;
  },
};

persona.setCuidad("Barcelona");
console.log(persona.getInfo());

let libro = {
  titulo: "El Quijote",
  autor: "Miguel Cervantes",
  año: 1975,
  esAntiguo: function () {
    return this.año < new Date().getFullYear();
  },
};

console.log(`El libro "${libro}" es antiguo: ${libro.esAntiguo()}`);

// ---------------- Arrays --------------
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNumeros = Array.from(numeros, (x) => x * 2);

console.log(`Números originales: ${numeros.join(",")}`);
console.log(`Números multiplicados por 2: ${newNumeros.join(",")}`);

let pares = [];
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) pares.push(i);
}

console.log(`Primeros 10 números pares: ${pares.join(",")}`);

// --------------- DOM ----------------
const parrafos = document.querySelectorAll(".exercise-1__p");
const button = document.querySelector(".exercise-1__btn");

button.addEventListener("click", () => {
  for (const parrafo of parrafos) {
    parrafo.style.color = "blue";
  }
});

const form = document.querySelector(".exercise-2__form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const button = e.target.text;
  alert(`Has ingresado: ${button.value}`);
});

const elmUls = document.querySelectorAll(".exercise-3__li");

for (const element of elmUls) {
  element.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });
}

const inputForm2 = document.querySelector(".exercise-4__input");
const btnForm1 = document.querySelector(".exercise-4__desh");
const btnForm2 = document.createElement("button");
btnForm2.textContent = "Habilitar Campo";

btnForm1.addEventListener("click", (e) => {
  e.target.after(btnForm2);
  inputForm2.disabled = true;
});

btnForm2.addEventListener("click", (e) => {
  inputForm2.disabled = false;
  e.target.remove();
});

// ------------ LocalSorage -------------
const inputForm3 = document.querySelector(".exercise-5__input");
const btnForm3 = document.querySelector(".exercise-5__btn");

const p = document.createElement("p");
const btnForm4 = document.createElement("button");
btnForm4.textContent = "Eliminar Correo Guardado";

function insertContentDiv(text) {
  p.textContent = `Correo guardado: ${text}`;
  btnForm3.after(p, btnForm4);
}

let correo = localStorage.getItem("correo");
if (correo) insertContentDiv(correo);

btnForm3.addEventListener("click", () => {
  localStorage.setItem("correo", inputForm3.value);
  insertContentDiv(inputForm3.value);
});

btnForm4.addEventListener("click", () => {
  localStorage.removeItem("correo");
});
