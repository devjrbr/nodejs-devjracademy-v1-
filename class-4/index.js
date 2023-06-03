// // LOOPS EM JAVASCRIPT

// Loop while
console.log("--- Loop while ---");
let count = 6;
while (count < 5) { // enquanto
    console.log(count);
    count++;
}

// Loop do-while
console.log("--- Loop do-while ---");
let j = 6;
do { // faça 
  console.log(j);
  j++;
} while (j < 5); // enquanto 

// Loop for
console.log("--- Loop for ---");
const myArr = ["Luiz", "Zenith", "Romulo", "Varela", "Val"]
const myStr = "Luiz";
for (let k = 0; k < 5; k++) {
    console.log(myArr[k]);
}

// Loop for-in (usado para iterar sobre propriedades de um objeto)
console.log("--- Loop for-in ---");

const obj = { a: 1, b: 2, c: 3 };

for (let key in obj) {
  console.log(key + ": " + obj[key]);
  console.log(`Chave -> ${key}  : Valor -> ${obj[key]} `);
}

// Loop for-of (usado para iterar sobre elementos de uma coleção)
console.log("--- Loop for-of ---");
const array = [1, 2, 3, 4, 5];
const arrayOfUsers = ["Luiz", "Zenith", "Romulo", "Varela", "Val"];

for (let qualquerCoisa of arrayOfUsers) {
    console.log(qualquerCoisa);
}

// Loop while (usado para iterar sobre elementos de uma coleção)
console.log("--- Loop while ---");
let counts = 0;
while (counts < arrayOfUsers.length) { // enquanto
    console.log(arrayOfUsers[counts]);
    counts++;
}

