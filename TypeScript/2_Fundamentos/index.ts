// 1 - Numbers
let x: number = 10;

console.log(x);

x = 19;

console.log(typeof x, x);

const y: number = 19.09877;

console.log(typeof y, y.toPrecision(3));

// 2 - Strings
const fisrtName: string = "Alessandro";
const lastName: string = "Schutz";
console.log(fisrtName.toLocaleUpperCase());

let fullName: string;

fullName = fisrtName + " " + lastName;

console.log(typeof fullName, fullName);

// 3 - Booleans
let a: boolean = false;

console.log(typeof a, a);

a = true;

console.log(typeof a, a);

// 4 - inference e annotation
let ann: string = "Teste";

let inf = "Teste";

// ann = 1;
// inf = 1

console.log("Testando");
