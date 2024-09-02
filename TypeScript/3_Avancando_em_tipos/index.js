"use strict";
// 1 - arrays
let numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers[4], numbers);
const nomes = ["Ale", "João", "Pedro", "José"];
nomes.push("Joana");
console.log(nomes);
// 2 - Outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Mateus" }];
arr1.push([1, 2, 3, 4, 5]);
console.log(arr1, typeof arr1);
