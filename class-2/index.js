// Variáveis e tipos de dados
let myString = "Olá, mundo!";
const myNumber = 42;

// Boolean, undefined e null
var myBoolean = true; //verdeiro
let myUndefined; //undefined
const myNull = null; //void


// Operadores aritméticos, de atribuição e de comparação
// Operadores = + * / - %
let x = 5;
let y = 10;
// let z = 0;

let z = x + y; // 15
//console.log('z = ', z); // <---- 15

//INCREMENTO
//z = z + 5; // <= 20

z += 5; // 20
let i = 0;
i = i + 1;
i++; // <- 1

z = z * 2; // <= 40
z *= 2; // 40

//DECREMENTO
let j = 0;
j = j - 1;

j--; // <== -1

/**
 * == <-- igual
 * != <-- diferente de
 * < menor que
 * > maior que
 * >= maior ou igual a
 * <= menor ou igual a
 */
x = 1;
y = 10

console.log(x == y); // false
console.log(x != y); // true
console.log(x < y); // true
console.log(x > y); // false
console.log(x <= y); // true
console.log(x >= y); // false

let m = '10'; // <- string
let n = 10; // <- number
console.log(m === n); // false

// Primitivos
// String
let helloWorld = "Olá, mundo!";

console.log(helloWorld.length); // 11
console.log(helloWorld.toUpperCase()); // "OLÁ, MUNDO!"

// Number
let numberType = 42;
console.log(numberType.toString()); // "42"
console.log(typeof numberType); // "number"

// Boolean
let myBoolean = true;
console.log(!myBoolean); // false

// Undefined
let undefinedVar;
console.log(typeof undefinedVar); // "undefined"

// Null
let nullVariable = null;
console.log(typeof myNull); // "object"

// Complexos
// Array
let alunos = ['Pedro', 'João', 'Aura'];
console.log({alunos});

alunos.push('Sabrina');
console.log({alunos});

alunos.pop(1);
console.log({alunos});


let myArray = [1, 2, 3, 4];

console.log(myArray.length); // 4
console.log(myArray[1]); // 2

// Object
let pessoa = { 
    nome: "João",
    idade: 30 
};

console.log(pessoa.nome); // "João"
console.log(pessoa.idade); // 30

console.log({pessoa});

let pessoas = [];

pessoas.push({nome: 'marcelo', idade: 20});
pessoas.push({nome: 'joao', idade: 30});

console.log({pessoas});

console.log('nome:', pessoas[0].nome);

// Expressões booleanas
let a = 5;
let b = 10;
console.log(a < b); // true
console.log(a == b); // false
console.log(a > b || a == b); // true
console.log(!(a < b)); // false