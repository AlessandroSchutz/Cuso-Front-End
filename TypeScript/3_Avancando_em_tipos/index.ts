// 1 - arrays
let numbers: number[] = [1, 2, 3, 4];

numbers.push(5);

console.log(numbers[4], numbers);

const nomes: string[] = ["Ale", "João", "Pedro", "José"];

nomes.push("Joana");

console.log(nomes);

// 2 - Outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);
console.log(nums);

// 3 - any
const arr1: any = [1, "teste", true, [], { nome: "Mateus" }];

arr1.push([1, 2, 3, 4, 5]);
console.log(arr1, typeof arr1);

// 4 - parametros tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(9, 8);

// 5 - Retorno de função
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Mateus"));

// 6 - Função anonima
setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary));

  // console.log(sallary);
}, 2000);

// 7 - Tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);

// 8 - Propriedades Opcionais

function showNumbers(a: number, b: number, c?: number) {
  console.log("A:" + a);
  console.log("B:" + b);
  if (c) {
    console.log("C:" + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// Validando props opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }

  return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Alessandro", "Schutz"));
console.log(advancedGreeting("Pablo"));

// 10 - Union Types

function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "teste", true];

console.log(arr2);

// 11 - Avançando em union types

function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }
  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O id é: ${id}`);
}

showId(1);
showId("200");
showId(123);

// 13 - Interface
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x},Y: ${obj.y}, Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoords(coordObj);

// 14 - Diferença entre type alias e interfaces
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "José", age: 19 };

console.log(somePerson);

type personType = {
  name: string;
};
// type personType = {
//   age: string;
// };

// 15 - Literal Types
let test: "Testando";

test = "Testando";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`);
}

showDirection("left");
showDirection("right");
showDirection("center");

// 16 - Non-null Assertion Operator

const p = document.getElementById("some-p");

console.log(p!.innerText);

//  17 - bigint
let n: bigint;

n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);

// 18 - symbol
let symbolA: symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
