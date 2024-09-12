// ==== Crear variables ===
const text: string = "Hola, TypeScript!",
   number: number = 123,
   boolean: boolean = true,
   date: Date = new Date();

const typeDataUL = document.querySelector(".type-data ul") as HTMLUListElement
typeDataUL.innerHTML = `
   <li>Texto: ${text} </li>
   <li>Número: ${number} </li>
   <li>Booleano: ${boolean.valueOf()}</li>
   <li>Fecha: ${date.getDate()}</li>
`

// ==== Convertir Numero a Cadena ====
const convertNumberToString = (name: number) => name.toString();
const convertNumberParagrap = document.querySelector(".convert-number p") as HTMLParagraphElement
convertNumberParagrap.textContent += convertNumberToString(456)

// ==== Suma de Elementos de Array ====
const sumElementsArray = (list: number[]) => list.reduce((acum, currentValue) => acum + currentValue)
const sumElementsParagrap = document.querySelector(".sum-elements p") as HTMLParagraphElement
sumElementsParagrap.textContent = `Suma de Array: ${sumElementsArray([20, 50, 100, 254])}`

// ==== Objeto Estudiante ====
interface Student {
   name: string
   age: number
   course: string
}

const student: Student = {
   name: "Juan",
   age: 20,
   course: "Matematicas"
}

const studentUL = document.querySelector(".obj-student ul") as HTMLUListElement
studentUL.innerHTML = `
   <li>Estudiante: ${student.name} </li>
   <li>Edad: ${student.age} </li>
   <li>Curso: ${student.course} </li>
`
// ==== Type Dirección ====
type Address = {
   street: string
   city: string
   code: number
}

const addressUser: Address = {
   street: "Av Principal",
   city: "Ciudad",
   code: 1234
}

const addressParagrap = document.querySelector(".address p") as HTMLParagraphElement
addressParagrap.textContent = `Calle: ${addressUser.street}, Ciudad: ${addressUser.city}, CP: ${addressUser.code}`

// ==== Interfaz Usuario ====
interface User {
   nombre: string;
   correo: string;
   saludar(): string;
}

const usuario: User = {
   nombre: "Ana",
   correo: "ana@example.com",
   saludar() {
      return `Hola, mi nombre es ${this.nombre}.`;
   }
};

const userParagrap = document.querySelector(".user-info p") as HTMLParagraphElement
userParagrap.textContent = usuario.saludar()

// ==== Clase Persona ====
class Persona {
   nombre: string;
   edad: number;

   constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
   }

   presentarse(): string {
      return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
   }
}

const persona = new Persona("Ana García", 30);
const userInfo2 = document.querySelector(".user-info-2 p") as HTMLParagraphElement
userInfo2.textContent = persona.presentarse()

// ==== Clase Generica ====
class Caja<T> {
   private valor: T;

   constructor(valor: T) {
      this.valor = valor;
   }

   getValue(): T {
      return this.valor;
   }
}

const cajaNumero = new Caja(42);
const cajaTexto = new Caja("Hola Mundo");

const genericParagraph = document.querySelector(".generica p") as HTMLParagraphElement
genericParagraph.innerHTML = `Contenido CajaNumero: ${cajaNumero.getValue()}, Tipo: ${typeof cajaNumero.getValue()}`
genericParagraph.innerHTML += `Contenido CajaTexto: ${cajaTexto.getValue()}, Tipo: ${typeof cajaTexto.getValue()}`

// ==== Función Generica ====
function identidad<T>(valor: T): T {
   return valor;
}

const numero = identidad(123);
const texto = identidad("Hola Mundo");

const functionParagraph = document.querySelector(".funcion p") as HTMLParagraphElement
functionParagraph.innerHTML = `Identidad del número: ${numero}<br>Identidad del texto: ${texto}`

// Enumeración
enum Color {
   Rojo = "Rojo",
   Verde = "Verde",
   Azul = "Azul"
}

const colorFavorito = Color.Rojo;
const enumParagraph = document.querySelector(".enum") as HTMLParagraphElement
enumParagraph.innerHTML += `Color Favorito: ${colorFavorito}`




