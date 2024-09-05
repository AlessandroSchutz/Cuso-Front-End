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
